const db = require ("../../database/models");
const Op = db.Sequelize.Op;
const  sequelize = db.sequelize

const User = db.User;


const usersApiController = {
    list:(req,res)=>{
        User.findAll()
        .then(users=>{
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: "/api/users"
                },
                data: users.map(user => {
                    return{
                        id: user.id,
                        fullName: user.full_name,
                        email: user.email,
                        image: "/images/productsImages/" + user.avatar,
                        detail: "/api/users/" + user.id
                    }
                })
            }
            res.json(respuesta)
        })
    },

    detail:(req,res)=>{
        User.findByPk(req.params.id)
        .then(user=>{
            let respuesta = {
                meta:{
                    status: 200,
                    total: user.id.length,
                    url: "/api/users/" + user.id
                },
                data: {
                        id: user.id,
                        fullName: user.full_name,
                        email: user.email,
                        image: "/img/usersImg/" + user.avatar,
                    }
            }
            res.json(respuesta)
        })
    }
}
module.exports = usersApiController