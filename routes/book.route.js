const express = require("express")
const { BooksModel } = require("../model/book.model")
const bcrypt = require("bcrypt")
const bookRouter= express.Router()
const jwt = require("jsonwebtoken")
const {auth} = require("../middleware/auth")



//Adding new book

bookRouter.post("/",auth,async(req,res)=>{
    try {
        const note = new BooksModel(req.body)
        await note.save()
        res.send({"msg":"New Book is added"})
    } 
    catch (error) {
        res.send({"Erroe":error})
    }
})

//Getting all the books 

bookRouter.get("/",async(req,res)=>{
    
    try {
         const books = await BooksModel.find()
         res.send({books})
    } 
    catch (error) {
        res.send({"error":error})
    }
})


//Get book by id

bookRouter.get("/:bookID",async(req,res)=>{
    const {bookID} = req.params
    try {
        const note = await BooksModel.findOne({_id:bookID})
        res.send({note}) 
    } 
    catch (error) {
        res.send({"Error":error})
    }
})

//Find book by category
bookRouter.get("/",async (req, res) => {
    const {Book_category}  = req.query.category;
    try {
        if (Book_category) {
           const  books = await BooksModel.find({ category: Book_category });
            // res.send({ books });
        } 
        else {
            res.send({"Error":"Book Not Found"})
        }
        
    } catch (error) {
        res.status(500).send({ "error": error });
    }
});

//Find book by author & category
bookRouter.get("/", auth, async (req, res) => {
    const { author, category } = req.query;
    try {
        let query = {};
        if (author) {
            query.author = author;
        }
        if (category) {
            query.category = category;
        }

        const books = await BooksModel.find(query);
        res.send({ books });
    } 
    catch (error) {
        res.status(500).send({ error: error });
    }
});



//update books
bookRouter.patch("/:bookID",auth,async(req,res)=>{
    const {bookID} = req.params
    try {
        const note = await BooksModel.findOne({_id:bookID})

        if(note.bookID === req.body.userID){
            await BooksModel.findByIdAndUpdate({_id:bookID},req.body)
            res.send({"msg":`The book with id ${bookID} has been updated`}) 
        }
        else{
            res.send({"msg":"you are not authorised"})
        }
           
    } 
    catch (error) {
        res.send({"Error":error})
    }
})

//delete books
bookRouter.delete("/:bookID",auth,async(req,res)=>{
    const {bookID} = req.params
    try {
        const book = await BooksModel.findOne({_id:bookID})

        if(book.bookID === req.body.bookID){
            await BooksModel.findByIdAndDelete({_id:bookID})
            res.send({"msg":`The Note with id ${bookID} has been deleted`}) 
        }
        else{
            res.send({"msg":"you are not authorised"})
        }
           
    } 
    catch (error) {
        res.send({"Error":error})
    }
})



module.exports={
    bookRouter
}