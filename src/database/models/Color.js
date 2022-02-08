module.exports = (sequelize, dataTypes) => {
    let alias = "Color"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color_name: {
            type: dataTypes.STRING
        },
        color_originalname: {
            type: dataTypes.STRING
        }  
    };
    let config = {
        tableName: "colors",
        timestamps: false
    }


    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models){
        Color.belongsToMany(models.Product, {
       as: "products",
       through: "product_color",
       foreignKey: "color_id",
       otherKey: "product_id",
       timestamps: false
       });
    }

    return Color


}