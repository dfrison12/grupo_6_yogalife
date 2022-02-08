module.exports = (sequelize, dataTypes) => {
    let alias = "User"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        full_name: {
            type: dataTypes.STRING
        } ,
        dni: {
            type: dataTypes.INTEGER
        },
        user_category_id: {
           type: dataTypes.INTEGER 
        },
        address: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        } 
    };
    let config = {
        tableName: "users",
        timestamps: false
    }


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models){
        User.belongsTo(models.UserCategory, {
            as:"user_categories",
            foreignKey: "user_category_id"
        })
    }

    return User


}