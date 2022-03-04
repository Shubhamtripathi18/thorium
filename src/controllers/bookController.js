const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createNewBook = async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    if(!authorId){
         return res.send("authorId required")
    }
    let author = await authorModel.findById(authorId)
    if(!author) {
        return res.send("no author is present with given id")
    }
    if(!publisherId) {
        return res.send("publisher details required")
    }
    let publisher = await publisherModel.findById(publisherId)
    if(!publisherId) {
        return res.send ("publisher id is incorrect")
    }
    let bookCreated = await bookModel.create(book) 
    return res.send({data:bookCreated})
}


const getBooksDataWithAuthorDetail = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data:specificBook})
}


// que 5

const  isHardCover = async function (req, res) {
    let data = await bookModel.updateMany(
    
        {publisher:{$or : ["621fc142848b921041d00f0c","6220c4c84bc1906f0c89f57d"]}},
        {$set : {isHardCover:true}},
        {new:true}
    )
    res.send({msg:data})

    }

// const findandUpdateAuther = async function (req,res) {
   
//     let PenguineId = await publisherModel.find(
//       {$or:[{"name":"penguine"},{"name":"HarperCollins"}]}).select({_id:1})
//       res.send(PenguineId);
  
//       for(let i=0; i< PenguineId.length; i++){
//         await bookModel.updateMany(
//           {publisher :PenguineId[i]._id},{isHardCover:true})
//       }
//      res.send({msg:"done"})
// } 
    

const ratingsGreat = async function (req,res){
    let data = await bookModel.updateMany({ratings:{$gt:3.5}},{price:10},{new:true})
    res.send({data})
}
module.exports.createNewBook= createNewBook

module.exports.getBooksDataWithAuthorDetail=getBooksDataWithAuthorDetail

module.exports.isHardCover=isHardCover
module.exports.ratingsGreat=ratingsGreat