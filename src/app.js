//Modulos
const express = require ('express');
const app = express();
const mainRouter = require ('./routes/mainRouter')
const productsRouter = require ('./routes/productsRouter')
const userRouter = require ('./routes/userRouter')



// Configuración - Define carpeta estatica
app.use(express.static('../public'));

//Configutacion - Guardia de Seguridad para method POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Template engine
app.set('view engine','ejs');


//Rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/login', userRouter);
app.use('/register', userRouter);
app.use('/shopcart', mainRouter);



/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get('/shopcart', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/shopcart.html"))
});

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});
*/
app.listen(3000, () => console.log('Servidor funcionando en puerto 3000'));
