const express = require('express')
const app = express()

const path = require('path')

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/todo')
const todo = require('./models/todo')
 
app.set('view engine', 'ejs')

app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    const todos = await todo.find()
    res.render('index.ejs', {todos, todos})
})

app.post('/', async (req,res) => {
    const id = req.body.item
    let status = req.body.status

    console.log(req.body)
    console.log(status)

    if(!status){
        status = false
    }else{
        status = true
    }

    res.send(await todo.updateOne({'_id' : id}, {$set:{'isDone' : status}}))
})

app.listen(5000)