# pokedex-fecthapi

Le projet est construit avec node.js, express.js, la pokéapi (https://pokeapi.co/), pug et il est déployé avec heroku. 
Il s'agit d'un pokedex, un répertoire pour chercher des pokémons par leurs nom où leur n°ID.
La valeur rentrée dans l'input vient s'ajouter en tant que variable à la fin de l'url que l'on utilise avec la métode fetch. La réponse est un objet json et en sont extraites plusieurs valeurs : nom, id, les points d'expérience, le poids, la taille, et les types qui caractérisent le pokémon recherché : herbe, poison, etc...
Les variables sont ensuites transférées à un fichier pug qui les affiche au bon endroit selon une image en background qui représente le pokedex. 

attention : la pokéapi est très lente, est la vitesse de réponse peut varier de quelques secondes à un temps supérieur à 60s, ce qui fait crasher l'application sur heroku. Lancer en local avec npm start, l'appli finira par afficher le pokémon demandé.
