const express = require('express');

const router = express.Router();

const UserController= require("../controllers/userController")

const ProductController=require("../controllers/productController")

const purchaseController=require("../controllers/purchaseController")

//middleWare

let headCheck = function(req,res,next){
    
    let isFreeAppUser = req.headers["isfreeappuser"]
     
    if(isFreeAppUser != undefined){

      console.log("control goes to middleware")
    
        next();
    
}else{

    res.send(" MISSING Header")

}

}

router.post("/createProduct",ProductController.createProduct  )

 router.get("/getProduct", ProductController.getProduct)

router.post("/createUser",headCheck, UserController.createUser)

 router.get("/getUsersData", UserController.getUsersData)

 router.post("/createOrder",headCheck, purchaseController.createOrder )



module.exports = router;