# pokedex-fecthapi

Le projet est basé sur node.js et express.js, pokéapi (https://pokeapi.co/), pug et il est déployé avec heroku. 
Il s'agit d'une pokedex, un répertoire pour chercher des pokémons par leurs nom où leur ID.
La valeur rentrée dans l'input viens s'ajouter en tant que variable à la fin de l'url que l'on utilise avec la métode fetch. La réponse est un objet json et en son extraites plusieurs valeurs : nom, id, les points d'expérience, le poids, la taille, et les types de pokémon auxquels le pokémon recherché appartient : herbe, poison, etc...
Les variables sont ensuites transférés à un fichier pug qui les affiche au bon endroit selon une image en background qui représente le pokedex. 

Le projet est déployé avec Heroku.
