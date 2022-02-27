const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador=
{
    

    home:(req, res)=>{
        res.render("main/home.ejs", {productos: products})
    }

  
}

module.exports=controlador