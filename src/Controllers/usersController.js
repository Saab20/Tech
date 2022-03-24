
const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const controlador=
{
    // Redirección al formulario de creación de registro
    register:(req, res)=>{
        res.render("users/register")
    },

    // Procesamiento de creación de registro   
    nuevoUsuario:(req, res)=>{
        const resultValidation = validationResult(req);

        if ( resultValidation.isEmpty() ) {
                
                let usuarios=users;
                let idNuevo=users[usuarios.length-1].id+1;
                let password = req.body.password;

                let nuevoPerfil={
                        id : idNuevo,
                        nombres : req.body.nombres,
                        apellidos : req.body.apellidos,
                        tipo_documento : req.body.tipo_documento,
                        dni: req.body.dni,
                        days: req.body.days,
                        months: req.body.months,
                        years: req.body.years,
                        email : req.body.email,
                        tel: req.body.tel,
                        password : bcryptjs.hashSync(password, 10),
                        img_perfil: req.file
                }
        usuarios.push(nuevoPerfil)
        fs.writeFileSync(usersFilePath,JSON.stringify(usuarios,null,' '))
        
        res.redirect('/users/mi_cuenta/'+ idNuevo)
        } else {
            res.render("users/register.ejs", {errors: resultValidation.mapped(),
                oldData: {
                    nombres : req.body.nombres,
                    apellidos : req.body.apellidos,
                    tipo_documento : req.body.tipo_documento,
                    dni: req.body.dni,
                    days: req.body.days,
                    months: req.body.months,
                    years: req.body.years,
                    email : req.body.email,
                    tel: req.body.tel,
                    }
                })
            }
    },

    //todos los usuarios
    indexRegister:(req, res)=>{
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        res.render("users/indexRegister.ejs", {usuarios: users})
    },

    //vista de cuenta de usuario
   mi_cuenta:(req, res)=>{
       let idPerfil= req.params.id;
       let usuarioEncontrado=null;
       let usuarios = users;

       for(let u of usuarios ){
           if (u.id== idPerfil){
               usuarioEncontrado=u;
               break;
              }
      }
  res.render("users/mi_cuenta.ejs", {usuarios: usuarioEncontrado})
  },

    // Procesamiento de editar perfil
    editar_perfil:(req, res)=>{
        
        let idPerfilSeleccionado= req.params.id;
        let perfilEncontrado=null;
        let usuarios = users;

        for(let u of usuarios ){
            if (u.id== idPerfilSeleccionado){
                perfilEncontrado=u;
                break;
            }
        }
        res.render("users/editar_perfil.ejs",{usuarios: perfilEncontrado})
       
    },

   update:(req, res)=>{
   
        let perfileditado=req.body
        let idbuscado= req.params.id
        let usuarios = users
   
       for(let u of usuarios ){
            if (u.id== idbuscado){
                u.nombres=perfileditado.nombres;
                u.apellidos=perfileditado.apellidos;
                u.tipo_documento=perfileditado.tipo_documento;
                u.dni=perfileditado.dni;
                u.days=perfileditado.days;
                u.months=perfileditado.months;
                u.years=perfileditado.years;
                u.email=perfileditado.email;
                u.tel=perfileditado.tel;
                u.password=perfileditado.password;
                break
           }
        }
       
        fs.writeFileSync(usersFilePath,JSON.stringify(usuarios,null,' '))
        res.redirect("/users/mi_cuenta/" + idbuscado)
   },

   // Delete - Borrar un perfil
    destroy : (req, res) => {
        let idPerfilSeleccionado = req.params.id;
        let perfilEncontrado=null;
   
        for (let u of users){
            if (u.id==idPerfilSeleccionado){
                perfilEncontrado=u;
                break;
                }
            }
   
            let perfil2 = users.filter(function(e){
                return e.id!=perfilEncontrado.id;
            })
            //fs.unlinkSync(path.join(__dirname, '../../public/img/users', perfilEncontrado.image));
            fs.writeFileSync(usersFilePath, JSON.stringify(perfil2,null,' '));
   
            res.redirect("/");
    },

    login:(req, res)=>{
        res.render("users/login")
    },

    ingresoLogin:(req, res) =>{
        
        let usuarios = users;
        let emailToLogin = req.body.email;
        let passwordToLogin = req.body.password;
   
        for(let u of usuarios ){
              if (u.email == emailToLogin){
                let igualContraseña = bcryptjs.compareSync(passwordToLogin, u.password);
                         if(igualContraseña) {
                             
                          }
                      }
                      res.redirect("/users/mi_cuenta/");
                 }
    }

}

module.exports=controlador