//Modulos
const express = require ('express');
const app = express();
const mainRouter = require ('./routes/mainRouter')
<<<<<<< HEAD
const productsRouter = require ('./routes/productsRouter')
=======
const userRouter = require ('./routes/userRouter')
>>>>>>> 278358fc120bbb001550fbc02ec1bff7efff5299

app.set('view engine','ejs');

// Configuración
app.use(express.static('../public'));
//Template engine



//Rutas
app.use('/', mainRouter);
<<<<<<< HEAD
app.use('/products', productsRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);
=======
app.use('/product-detail', mainRouter);
app.use('/login', userRouter);
app.use('/register', userRouter);
>>>>>>> 278358fc120bbb001550fbc02ec1bff7efff5299
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
