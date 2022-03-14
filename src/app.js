//Modulos
const express = require ('express');
const session = require ('express-session');
const cookies = require ('cookie-parser');

const app = express();
// Configuración - Define carpeta estatica
app.use(express.static('../public'));

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// Implementacion de session
app.use(session({
    secret: "Esto es un secreto",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());

const mainRouter = require ('./routes/mainRouter')
const productsRouter = require ('./routes/products')
const userRouter = require ('./routes/userRouter')
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE





//Configutacion - Guardia de Seguridad para method POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Congfigutacion - Pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));

//Template engine
app.set('view engine','ejs');

app.use(userLoggedMiddleware)


//Rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);
app.use('/productCart', mainRouter);



app.listen(3001, () => console.log('Servidor funcionando en puerto 3001'));
