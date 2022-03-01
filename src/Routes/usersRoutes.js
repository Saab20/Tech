const usersController= require("../Controllers/usersController")

const express=require("express")
const path = require("path");
const router= express.Router()

router.get("/register",usersController.register)
router.post("/nuevousuario",usersController.update)



router.get("/login",usersController.login)


module.exports=router