const express = require('express');
const hbs = require('hbs');
require('./database/connect');
const path = require('path');
const app = express();
const port = process.env.PORT || 8085;
const User = require("./models/form_data");

//setting the path
const staticpath = path.join(__dirname,"../public");
const templates = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

//middlewares
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));

//setting path
app.set('view engine',"hbs");
app.set('views',templates);
hbs.registerPartials(partialspath)

//setting the static path
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'../public')));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/Database', async(req,res)=>{
    let data = await User.find();
    res.render('Database',{
        Data : data
    });
});

app.post('/contact', async (req,res)=>{
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render('index');
    } catch (err){
        res.status(500).send(err);
    }
});

app.listen(port,()=>{
    console.log(`Server listning on http://localhost:${port}`);
});