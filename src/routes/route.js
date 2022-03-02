const express = require('express');
const router = express.Router();

const BookController= require("../controller/bookController")



router.post("/createBook", BookController.createBook)

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;