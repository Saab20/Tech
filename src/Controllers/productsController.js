const { json } = require('express/lib/response');
const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');

const controlador=
{

    home:(req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("home", {productos: products})
    },

    detalle_producto:(req, res)=>{
        let idProducto= req.params.id;
        let productoEncontrado=null

        for(let p of products ){
            if (p.id== idProducto){

                productoEncontrado=p;
                break;

            }
        }
        res.render("products/detalle_producto.ejs",{productos: productoEncontrado})
    },

    editar_producto:(req, res)=>{
        
        let idProducto= req.params.id;
        let productoEncontrado=null

        for(let p of products ){
            if (p.id== idProducto){

                productoEncontrado=p;
                break;

            }
        }
        res.render("products/editar_producto.ejs",{productos: productoEncontrado})
        
    },

    update:(req, res)=>{
    
        let productoseditado=req.body
        let idbuscado= req.params.id
        let productos=products

        for(let p of productos ){
            if (p.id== idbuscado){
                p.name=productoseditado.name
                p.price=productoseditado.price
                p.price2=productoseditado.price2
                p.discount=productoseditado.discount
                p.category=productoseditado.category
                p.description=productoseditado.description
                break;

            }
        }
        
        fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '))

        res.redirect("/")
    },

    // Redirección al formulario de crear un producto
    crear_producto:(req, res)=>{
        res.render("products/crear_producto.ejs")
        
    },

    // Acción de crear un producto
    create:(req, res)=>{

        let nombreImagen = req.file.filename;

        db.productos.create({

                nombre : req.body.name,
                precio : req.body.price,
                descuento: req.body.discount,
                inventario : req.body.inventory,
                id_categoriaFK: req.body.category,
                id_marcaFK: req.body.mark,
                descripcion : req.body.description,
                imagen: __dirname+''

        });

        // idNuevo=0;

		// for (let s of products){
		// 	if (idNuevo<s.id){
		// 		idNuevo=s.id;
		// 	}
		// }

		// idNuevo++;

		// let nombreImagen = req.file.filename;
        
        // let productos=products
        // let idnuevo=products[productos.length-1].id+1

        // let productonuevo={
        // id : idnuevo,
        // name : req.body.name,
        // price : req.body.price,
        // price2 : req.body.price2,
        // discount: req.body.discount,
        // category: req.body.category,
        // description : req.body.description,
        // image: nombreImagen

        // }
        // productos.push(productonuevo)
        // fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '))

        res.redirect("/")
        console.log(productoNuevo)

    },

    //Vista de carro de compra
    carro_de_compras:(req, res)=>{
        res.render("products/carro_de_compras.ejs")
    },

        // Delete - Borrar un producto
    destroy : (req, res) => {
        let idProductoSeleccionado = req.params.id;
        let productoEncontrado=null;
    
        for (let p of products){
            if (p.id==idProductoSeleccionado){
                productoEncontrado=p;
                break;
                }
            }
    
            let productos2 = products.filter(function(e){
                return e.id!=productoEncontrado.id;
            })
            fs.unlinkSync(path.join(__dirname, '../../public/img', productoEncontrado.image));
            fs.writeFileSync(productsFilePath, JSON.stringify(productos2,null,' '));
    
            res.redirect("/");
        },

        // Vista de todos los productos 
    vitrina_productos:(req, res)=>{
        db.productos.findAll({include:[{association: 'categorias'}, {association: 'marcas'}, {association: 'especificaciones'}]})
        .then((productos) => {
            let listaProductos = [];

            for (producto of productos){

                let listaEspecificaciones=[];

				for (especificaciones of producto.especificaciones){
					listaEspecificaciones.push(especificaciones.tipo + ': ' + especificaciones.valor);
				}

                let productoPrueba ={
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    descuento: producto.descuento,
                    marca: producto.marcas.nombre,
                    imagen: __dirname+"../../public/img/"+ producto.imagen,
                    especificaciones: listaEspecificaciones
                }

                listaProductos.push(productoPrueba);
            }
            res.render("products/vitrina_productos.ejs", {Allproductos: listaProductos})  
            console.log("Ver: ", listaProductos);
        });
            console.log("llegue aca primero")
            
    },
};


module.exports=controlador