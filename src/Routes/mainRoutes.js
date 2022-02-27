const mainController= require("../Controllers/mainController")

const express =require("express")

const router= express.Router()

router.get("/home",mainController.home)

module.exports=router