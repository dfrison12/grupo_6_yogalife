//DATOS PARA TRABAJAR

const articulosRopa = [
    {
        id:1,
        titulo: 'Legging 7/8 Cotton Swasti',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et similique tempora laborum magnam accusamus dolorem vel alias fugit reprehenderit. Dicta nam nesciunt cumque rerum error. Cumque itaque odio provident dolor aliquid corporis corrupti eum veritatis, nihil debitis praesentium in quidem laudantium maiores. Rerum ipsa non quo voluptate, molestiae at repellat, quia ipsum sed eum praesentium enim repellendus recusandae cupiditate. Ratione error tempora, perspiciatis nesciunt modi, inventore necessitatibus hic porro dolorum voluptate ipsam laudantium repellendus quae unde adipisci neque provident architecto quaerat culpa nemo vero incidunt. Commodi, rerum facilis deserunt quis in distinctio voluptate veniam cum perspiciatis provident tempora officiis animi?',
        precio: '5400',
        img_1:'IMG_3861.JPG',
        img_2:'IMG_3863.JPG',
        img_3:'IMG_3867.JPG',
        talle:'',
        color:''
    }
]

const mainController = {
    index: function (req,res) {
        res.render('index');
    },
    productDetail: function (req,res){
        res.render('productDetail')
    }
    
}
module.exports = mainController;