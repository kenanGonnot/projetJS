# projetJS 
# Kenan and Fayçal - 2I

# PART 1 - Creation des dossiers et déplacements des images dans les dossiers "predicted" 
main.mjs => const mainPartOne : s'occupe de la première partie.
La fonction callTensorflow simule la sortie de tensorFlow

# PART 2 - Récupération des Bbox 
main.mjs => const mainPartTwo : s'occupe de la deuxieme partie
Nous n'avons pas très bien compris la question. 
Nous avons donc décidé de récupérer les valeurs de Bbox de chaque prédiction donné par TensorFlow, et de faire un calcul très basique. 
Calcul : (image.Height * Bbox) / image.width
Pour récupérer les dimensions de l'image, on a utilisé sizeOf from 'image-size'.

Vous pourrez trouver toute les fonctions utilisés dans ce projet dans le dossier "modules"
j'imagine que ce README n'est pas très utile pour vous. 

On se reverra peut-être l'année prochaine :D.

