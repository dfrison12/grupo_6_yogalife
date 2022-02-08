module.exports = (sequelize, dataTypes) => {
    let alias = "Product"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        cost: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        } ,
        discount: {
            type: dataTypes.INTEGER
        },
        descriptions: {
            type: dataTypes.STRING(500)
        },
        category_id: {
           type: dataTypes.INTEGER 
        },
        stock: {
            type: dataTypes.INTEGER
        },
        image_1: {
            type: dataTypes.STRING
        },
        image_2: {
            type: dataTypes.STRING
        },
        image_3: {
            type: dataTypes.STRING
        },
        image_4: {
            type: dataTypes.STRING
        } 
    };
    let config = {
        tableName: "products",
        timestamps: false
    }


    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models){
        Product.belongsTo(models.Category, {
            as:"categories",
            foreignKey: "category_id"
        })
    

    Product.belongsToMany(models.Image, {
        as: "images",
        through: "product_image",
        foreignKey: "product_id",
        otherKey: "image_id",
        timestamps: false
        });

    Product.belongsToMany(models.Color, {
        as: "colors",
        through: "product_color",
        foreignKey: "product_id",
        otherKey: "color_id",
        timestamps: false
        });

    Product.belongsToMany(models.Size, {
        as: "sizes",
        through: "product_size",
        foreignKey: "product_id",
        otherKey: "size_id",
        timestamps: false
        });

    }


    return Product


}