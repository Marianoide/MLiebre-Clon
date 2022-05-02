const express = require('express');

const app = express();

const path = require("path");

app.listen(3000,() => {
    console.log('Puerto 3000 Activo');

})

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})




