module.exports = (sequelize, dataTypes) => {
    let alias = "Image"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image_originalname: {
            type: dataTypes.STRING
        } 
    };
    let config = {
        tableName: "images",
        timestamps: false
    }


    const Image = sequelize.define(alias, cols, config);

    Image.associate = function(models){
        Image.belongsToMany(models.Product, {
       as: "products",
       through: "product_image",
       foreignKey: "image_id",
       otherKey: "product_id",
       timestamps: false
       });
    }

    return Image


}