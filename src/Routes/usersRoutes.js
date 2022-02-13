const usersController= require("../Controllers/usersController")

const express=require("express")

const router= express.Router()

router.get("/register",usersController.register)
router.get("/login",usersController.login)


module.exports=router