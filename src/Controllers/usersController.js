
const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controlador=
{
    register:(req, res)=>{
        res.render("users/register")
    },

    update:(req, res)=>{

        idNuevo=0;

		for (let s of users){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		//let nombreImagen = req.file.filename;
        
        let usuarios=users
        let idnuevo=users[usuarios.length-1].id+1

        let usuarionuevo={
        id : idnuevo,
        name : req.body.name,
        apellido : req.body.apellido,
        document_type:req.body.document_type,
        dni : req.body.dni,
        fecha: req.body.days,
        email : req.body.email,
        tel: req.body.tel,
        password: req.body.password,
        //image: nombreImagen

        }
        usuarios.push(usuarionuevo)
        fs.writeFileSync(usersFilePath,JSON.stringify(usuarios,null,' '))
        
        res.redirect("/users/login")
       console.log(usuarionuevo)

    },








    login:(req, res)=>{
        res.render("users/login")
    },

}

module.exports=controlador