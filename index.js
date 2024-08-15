const express = require('express');
const app = express();

let port = 3000;


app.get('/ig/:username', (req, res) => {
  const instaData = require('./data.json');
  const {username} = req.params;
  const data = instaData[username];
  console.log(data);

  if(data){
  res.render('instagram.ejs',{data});
  }
  else{
    res.render('error.ejs');
  }
})



app.listen(port,()=>{
    console.log(`App is listening on port: ${port}`);
})