//DATOS PARA TRABAJAR

const catalogo = [
    {
        id:1,
        titulo: 'Maillot Yoga Trip',
        ultima_coleccion: true,
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: 4600,
        oferta: 15,
        img1:'maillot-yogaTrip-1.JPG',
        img2:'maillot-yogaTrip-2.JPG',
        img3:'maillot-yogaTrip-3.JPG',
        img4:'maillot-yogaTrip-4.JPG',
        talle:[1,2,3],
        colors:['selva']
    },
    {
        id:2,
        ultima_coleccion: true,
        titulo: 'Legging Yoga Freestyle White Om',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: 5700,
        oferta: 0,
        img1:'legging-yogaFreestyle-1.JPG',
        img2:'legging-yogaFreestyle-2.JPG',
        img3:'legging-yogaFreestyle-3.JPG',
        img4:'legging-yogaFreestyle-4.JPG',
        talle:[1,2,3],
        colors:['Hora Magica']
    },
    {
        id:3,
        ultima_coleccion: false,
        titulo: 'Top O Vinshu',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: 3150,
        oferta: 5,
        img1:'topO-vishnu-1.JPG',
        img2:'topO-vishnu-2.JPG',
        img3:'topO-vishnu-3.JPG',
        img4:'topO-vishnu-4.JPG',
        talle:[1,2,3],
        colors:['Hora Magica']
    },
    {
        id:4,
        ultima_coleccion: true,
        titulo: 'Legging 3/8 Yoga Trip Atenea',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: 4300,
        oferta: 5,
        img1:'legging38-yogaTrip-1.JPG',
        img2:'legging38-yogaTrip-2.JPG',
        img3:'legging38-yogaTrip-3.JPG',
        img4:'legging38-yogaTrip-4.JPG',
        talle:[1,2,3],
        colors:['Tibet']
    },
    {
        id:5,
        ultima_coleccion: true,
        titulo: 'Legging 7/8 Yoga Trip Arizona',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: 5400,
        oferta: 10,
        img1:'legging78-yogaTripArizona-1.JPG',
        img2:'legging78-yogaTripArizona-2.JPG',
        img3:'legging78-yogaTripArizona-3.JPG',
        img4:'legging78-yogaTripArizona-4.JPG',
        talle:[1,2,3],
        colors:['siena']
    },
    {
        id:6,
        ultima_coleccion: false,
        titulo: 'SS Legging Larga Cotton new swasti',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: '5.400',
        img1:'leggingLarga-CNS-1.JPG',
        img2:'leggingLarga-CNS-2.JPG',
        img3:'leggingLarga-CNS-3.JPG',
        img4:'leggingLarga-CNS-4.JPG',
        talle:[1,2,3],
        colors:['Bosque Encantado','Hora Magica']
    },
]

const mainController = {
    index: function (req,res) {
        res.render('index', {'catalogo':catalogo});
    },

    productDetail: function (req,res){
        let item = req.params.id;
        let prenda = {}
        
        for (let i = 0; i < catalogo.length; i++){
            if (item == catalogo[i].id){
                prenda = catalogo[i]       
                } 
            }
        res.render('productDetail', {'prenda':prenda},);
    },

    login: function(req, res){
        res.render('login')
    },

    register: function(req, res){
        res.render('register')
    },

    shopcart: function (req, res) {
        res.render('shopcart')
        
    }

    
}
module.exports = mainController;