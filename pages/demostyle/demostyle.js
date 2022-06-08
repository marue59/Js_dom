// Récupération de l'élément ayant pour ID "eleves"
let divEleves = document.getElementById("eleves");
// Augmenter la taille du texte
divEleves.style.fontSize = "3em";


/*// Remplacement de la classe demo par la classe demo2
divEleves.classList.replace("demo", "demo2");
// Ajout de styles à l'élément 
divEleves.style.color = "red";
divEleves.style.fontSize = "3em";
*/

// Permet de changer de couleur (en mode 'transition douce') toutes les secondes
function smoothlyChangeColor() {
    // Attribut CSS pour la transtion
    divEleves.style.transition = "color 1s";
    // Appelle notre méthode pour générer une couleur hexa aléatoire et l'affecte à notre variable
    divEleves.style.color = getRandomColor();
    // Rappelle la méthode toutes les 1 sec (1000 ms)
    setTimeout(smoothlyChangeColor, 1000);
}

function getRandomColor() {
    // Suite de caractères hexadécimaux
    let letters = '0123456789ABCDEF';
    // Premier caractère d'une couleur
    let color = '#';
    // On va chercher 6 lettre au pif parmi notre liste
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    // Et on retourne le résultat
    return color;
}

smoothlyChangeColor();