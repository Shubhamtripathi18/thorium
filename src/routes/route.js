const express = require('express');
const router = express.Router();
const userControll=require('../controllers/userController')

const authenti=require('../authentication/authenti')

router.post('/users',userControll.createUsers)
  
router.post('/login',userControll.login)
 
router.get('/user/:userId',authenti.authentication, userControll.checkToken)
 
router.put('/user/:userId',authenti.authentication, userControll.updatedUser)
router.post('/user/:userId/post',authenti.authentication, userControll.updatedUser)

router.delete('/user/:userId',authenti.authentication, userControll.deletedUser)
module.exports = router;
router.put('/users/:userId',authenti.authentication, userControll.update)



// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

// module.exports = router;