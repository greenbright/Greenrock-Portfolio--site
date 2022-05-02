'use strict'
const express = require('express');
 const app = express();
 const port = 3000;


app.listen(port, ()=>console.log('listening at port 3000'))
app.use(express.static('public'))

 app.get('/',(req,res)=>{
	res.sendFile('./views/index.html', {root: __dirname})
 })

 