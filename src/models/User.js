// 1. Guardar al usuario en la DB
// 2. Buscar al usuario que se quiere logear por su email - findByPK email
// 3. Buscar a un usuario por su ID - findByPK id
// 4. Editar la informacion de un Usuario
// 5. Eliminar a un usuario de la DB

const fs = require('fs');
const path = require('path')


const User = {
    filename: path.join(__dirname, '../data/userDataBase.json'),

    getData: function() {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'))
    },

    generateID: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){return lastUser.id + 1}
        return 1
        
    },

    findAll: function () {
        return this.getData();
    },

    // Buscar Usuario por su ID
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    //Buscar Usuario por su email
    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound

    },

    // Guardar Usuario
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateID(),
            ...userData
        }

        allUsers.push(newUser);
        //tener en cuanta que si al metodo JSON stringify como segundo parametro null y tercero ' ' (un espacio vacio) conserva el formato de mi JSON;
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '))
        return newUser
    },

    // Eliminar usuario
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter (oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '))
    }
}



module.exports = User;