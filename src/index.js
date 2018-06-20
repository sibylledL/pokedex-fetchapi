import express from 'express';
const app = express();
import mongoose from 'mongoose';
import volleyball from 'volleyball';
import 'dotenv/config';
import path from 'path';
import fetch from 'node-fetch';
import cors from 'cors'

// const { SERVER_PORT } = process.env
const port = ('port', process.env.PORT || 3000);
const options = {
  promiseLibrary: Promise,
}

app.use(express.static('public'));

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended : true}));
app.use(volleyball);
//fin config


app.set('views', path.join(__dirname + '/views'))
app.set('view engine','pug');



app.get('/pokedex', (req, res) => {
 res.render("layout");
})

app.post('/pokedex', (req, res) => {
  var searchpokemon = req.body.searchpokemon;
  fetch('https://pokeapi.co/api/v2/pokemon/'+ searchpokemon)
 .then((res) =>
    res.json()
  )
 .then(objet => res.render('layout', {
   name:objet.name,
   img:objet.sprites.front_default,
   img2:objet.sprites.back_default,
   id:objet.id,
   type_1:objet.types[0].type.name,
   type_2:objet.types[1].type.name

 })

)

 .catch((error) => {
   console.log(error);
 })

})


app.listen(process.env.PORT,()=>{
  console.log(`app running);
})
