const usersRoutes= require("./src/Routes/usersRoutes")
const productsRoutes= require("./src/Routes/productsRoutes")


const express = require("express")
const app = express()
const path = require("path")
const ejs = require('ejs')


app.use(express.static(path.resolve(__dirname,"./public")))
app.set("view engine", "ejs")


app.use("/" ,usersRoutes)
app.use("/", productsRoutes)

app.use("*", (req, res)=>{
    res.render("ruta erronea")
} )




app.listen(process.env.PORT || 3005, function() {
    console.log("servidor corriendo")

})

// instalacion de express.json Metodo POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// instalación del metodo Override Método PUT Y DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


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