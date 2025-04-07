
var userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


var userController = {
    createUser: function(req, res) {
        const params = req.body;
        if (!params.name || !params.email || !params.password) {
            return res.status(400).send({ message: 'Faltan campos obligatorios' });
        }

        if (params.email) {
            const emailExists = userModel.findByEmail(params.email);
            if (emailExists) {
                return res.status(400).send({ message: "El email ya está en uso por otro usuario" });
            }
        }
        const user = userModel.create({
            name: params.name,
            email: params.email,
            type: params.type,
            password: params.password
        });
        return res.status(200).send(user);
    },

    readAllUser: function(req, res) {
        const userList = userModel.findAll();
        return res.status(200).send(userList);
    },

    getOneUser: function(req, res) {
        const id = parseInt(req.params.id, 10);
        const user = userModel.findById(id);
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        return res.status(200).send(user);
    },
    

    deleteUser: function(req, res) {
        const id = parseInt(req.params.id, 10);
        const user = userModel.findById(id);
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        const deletedUser = userModel.deleteById(id);
        return res.status(200).send(deletedUser);
    },

    updateUser: function(req, res) {
        const id = parseInt(req.params.id, 10);
        const params = req.body;
    
        const user = userModel.findById(id);
        if (!user) {
            return res.status(404).send({ message: "No se ha encontrado el usuario a actualizar" });
        }
    
        if (params.email) {
            const emailExists = userModel.findAll().some(u => u.email === params.email && u.id !== id);
            if (emailExists) {
                return res.status(400).send({ message: "El correo ya está en uso por otro usuario" });
            }
        }
    
        user.name = params.name ?? user.name;
        user.email = params.email ?? user.email;
        user.type = params.type ?? user.type;
        user.password = params.password ?? user.password;
    
        return res.status(200).send(user);
    },

    obtenerToken: async function(req, res) {
        try {
            const params = req.body;
            if (!params.email || !params.password) {
                return res.status(400).send({ message: 'Faltan campos obligatorios' });
            }
    
            const userFind = userModel.findByEmail(params.email);
    
            if (!userFind) {
                return res.status(404).send({ message: "Usuario no encontrado" });
            }

            if (userFind.password !== params.password) {
                return res.status(401).send({ message: "Contraseña incorrecta" });
            }
    
            const token = jwt.sign(
                { id: userFind._id, email: userFind.email, rol: userFind.type }, 
                process.env.SECRET_KEY,
                { expiresIn: "4h" }
            );
    
            return res.status(200).send({ message: "Generación de token exitoso", token});
        } catch (error) {
            return res.status(500).send({ message: "Error en el servidor" });
        }
    },
}

module.exports = userController;