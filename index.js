
const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.get('/' , (req,res) => {
    res.sendFile(__dirname + "\\index.html");
});

app.get('/about' ,(req,res) => {
    res.sendFile(__dirname + "\\about.html")
});

app.get('/songs', (req,res) => {
        res.sendFile(__dirname + '\\songs.html');
});


app.get('/photos' , (req,res) => {
    res.sendFile(__dirname + "\\photos.html")
})

app.listen(3000, () => {
    console.log("started listening...");
});

app.use(bodyParser.urlencoded({extended:true}));

