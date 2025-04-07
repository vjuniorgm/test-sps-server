const userModel = require('./models/user.model');

async function initialize() {
    const userExists = await userModel.findByEmail('admin@example.com');
    
    if (!userExists) {
        const defaultUser = {
            name: 'Admin',
            email: 'admin@spsgroup.com.br',
            password: '1234',
            type: 'admin'
        };

        await userModel.create(defaultUser);
        console.log('Usuario por defecto creado');
    } else {
        console.log('El usuario por defecto ya existe');
    }
}

initialize();