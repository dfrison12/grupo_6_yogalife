//Modulos
const express = require ('express');
const app = express();
const mainRouter = require ('./routes/mainRouter')
const productsRouter = require ('./routes/productsRouter')
const userRouter = require ('./routes/userRouter')
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


// Configuración - Define carpeta estatica
app.use(express.static('../public'));

//Configutacion - Guardia de Seguridad para method POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Congfigutacion - Pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));

//Template engine
app.set('view engine','ejs');


//Rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);
app.use('/shopcart', mainRouter);

app.listen(3000, () => console.log('Servidor funcionando en puerto 3000'));
