const usersRoutes= require("./src/Routes/usersRoutes")
const productsRoutes= require("./src/Routes/productsRoutes")
const mainRoutes= require("./src/Routes/mainRoutes")

const express = require("express")
const app = express()
const path = require("path")
const ejs = require('ejs')
const methodOverride = require('method-override');

app.use(express.static(path.resolve(__dirname,"./public")))
app.set("view engine", "ejs")

// instalacion de express.json Metodo POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// instalación del metodo Override Método PUT Y DELETE
app.use(methodOverride('_method'));

app.use("/" ,mainRoutes)
app.use("/users" ,usersRoutes)
app.use("/products", productsRoutes)

/*app.use("*", (req, res)=>{
    res.render("ruta erronea")
} )*/

app.listen(process.env.PORT || 3005, function() {
    console.log("servidor corriendo")

})


/*app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/tu_carrito', (req, res) => {
    res.sendFile(__dirname + '/views/carro_de_compras.html');
});

app.get('/detalle_producto', (req, res) => {
    res.sendFile(__dirname + '/views/detalle_producto.html');
});

/*app.get('/login', (req, res) => {
    res.sendFile((__dirname + '/views/login.html'))
})*/