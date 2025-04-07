
class UserModel {
    constructor({ id, name, email, type, password }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
        this.password = password;
    }
}

class UserMemoryStore {
    constructor() {
        this.users = [];
        this.currentId = 1;
    }

    generateId() {
        return this.currentId++;
    }

    create(userData) {
        const id = this.generateId();
        const user = new UserModel({ id, ...userData });
        this.users.push(user);
        return user;
    }

    findAll() {
        return this.users;
    }

    findById(id) {
        return this.users.find(user => user.id === id);
    }
    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    deleteById(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }

    clear() {
        this.users = [];
        this.currentId = 1;
    }
}

const userStore = new UserMemoryStore();

module.exports = userStore;
