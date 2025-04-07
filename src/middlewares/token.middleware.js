const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = function(req, res, next) {
    const authorizationHeader  = req.headers["authorization"];
    if (!authorizationHeader ) {
        return res.status(403).send({ message: "Token no proporcionado" });
    }
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(403).send({ message: "Token no proporcionado o formato incorrecto" });
    }

    const token = authorizationHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Token inválido" });
        }
        req.user = decoded;
        next();
    });
};
