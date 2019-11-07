const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const db = require ('./controle/main');

const port = 3000;

app.use(bodyParse.json());

app.use(
    bodyParse.urlencoded({
      extended: true,
    })
  )


  app.get('/',(req,res) =>{
      res.json({info: 'NODE RODANDO AQUIIIIOOOOOOO'});
  });

  app.listen(port,() => {
      console.log(`o server esta rodando localhost: ${port}`);
  })


  app.get('/users',db.getAllUsers);
  app.post('/register',db.createUser);
