module.exports = (sequelize, dataTypes) => {
    let alias = "UserCategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: dataTypes.STRING
        } 
    };
    let config = {
        tableName: "user_categories",
        timestamps: false
    }


    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function (models){
        UserCategory.hasMany(models.User, {
            as:"users",
            foreignKey: "user_category_id"
        })
    }

    return UserCategory


}