const mongoose= require("mongoose");


const bookSchema= new mongoose.Schema( {
    bookname: String,
    authorName: String,
    bookCover:{
        cover: String,
        enum: ["Hardcover","Paperback"]
    },
    tag: String

},{timestamps:true} );

module.exports= mongoose.model("Books", bookSchema)