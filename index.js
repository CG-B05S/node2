const express = require('express');
const app = express();
app.get('/api/main', function(req,res){
        res.send('Hi this is Rakesh Gowda')
})

app.listen(3000,()=>{
    console.log("server started");
})