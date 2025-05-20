const userService = require('./services/user.service');

async function initialize() {
    const userExists = await userService.findByEmail('admin@admin.com');
    
    if (!userExists) {
        const defaultUser = {
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin',
            type: 'admin'
        };

        await userService.create(defaultUser);
        console.log('Usuario por defecto creado');
    } else {
        console.log('El usuario por defecto ya existe');
    }
}

initialize();