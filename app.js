const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const puglexer = require('pug-lexer')
const bodyparser = require('body-parser');   //npm install body-parser
//  mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
const port = 8000;
var jsonParser = bodyparser.json()

// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: Number,
//     email: String,
//     address: String,
//     concern: String
//   });

//  const contact = mongoose.model('contact', contactSchema);  

//Express Specific Stuff
app.use('/static',express.static('static')) ;  //serving static files
app.use(express.urlencoded({extended: true}));

// html specific stuff
app.set('view engine','html') ; //set the template engine as html
app.engine('html', require('ejs').renderFile); //npm install ejs
app.set('views',path.join(__dirname,'views'));// set the views directory

// endpoints
app.get('/',( req, res)=>{
    const params = {}
    res.status(200).render('index.html',params);
});
app.get('/contact',( req, res)=>{
    const params = {}
    res.status(200).render('contact.html',params);
});
// app.post('/contact',( req, res)=>{
//     var mydata = new contact(req.body);
//     mydata.save().then(()=>{
//     res.send('This item has been saved to the database.');
//     }).catch(()=>{
//         res.status(400).send('Item was not saved to our database.')
//     })
    // res.status(200).render('contact.html')
// });

// start the server
app.listen(port,() => {
    console.log(`The application started successfully on port ${port}`);
});