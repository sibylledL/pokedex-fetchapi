// import express from "express";
// import fetch from 'node-fetch';
//
// import { Pokemon } from '../models/pokemons';
//
// const pokedexRouter = express.Router();
//
//
//
// pokedexRouter.get('/searchpokemon', (req, res) => {
//     res.render('layout')
// })
// 
//
// const datas = [];
// fetch('https://pokeapi.co/api/v2/pokemon/')
//  .then(pokemon => pokemon.json())
//  .then(pokemon => {
//    datas.push(pokemon)
//    console.log(pokemon)
//  })
//  .catch((error) => {
//    console.log(error);
//  })
//
// const datas1 = [];
// pokedexRouter.get('/:id',(req,res) => {
//   let _id = req.params.id;
//     res.json(fetch('https://pokeapi.co/api/v2/pokemon/'+ _id)
//     .then(pokemon => pokemon.json())
//     .then(pokemon => {
//       datas1.push(pokemon)
//       console.log(pokemon)
//     }))
//
// });
//
// export { pokedexRouter }
//
//
// //Pokemon.find({}).then(pokemons=>{
//   //res.render('pokemons/layout.pug',{pokemons:pokemons});
// //})
