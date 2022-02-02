const express= require("express")
const app=express()
const path= require("path")

app.get('/', (req,res)=>{
    res.send("home")
})

app.get('/login', (req,res)=>{
    res.sendFile((__dirname + '/views/login.html'))

})

app.use(express.static(path.join(__dirname, './public')))

app.listen(3005,()=>{
    console.log("servidor corriendo")

})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/tu_carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carro_de_compras.html');
});

app.get('/detalle_producto', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_producto.html');
});