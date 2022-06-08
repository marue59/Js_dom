//Click dans ma div ca incrémente le parent
// click sur le button ca incrémente l'enfant 

let compteurParent = 0;
let compteurEnfant = 0;

let divParent = document.getElementById('parent');
let boutonEnfant = document.getElementById('enfant');
let body = document.getElementsByTagName('body')[0];

let parentCompteur = document.getElementById('parent-compteur');
let enfantCompteur = document.getElementById('enfant-compteur');

divParent.style.width = '200px';
divParent.style.height = '60px';
divParent.style.backgroundColor = 'gray';
divParent.style.border = "1px solid black";
divParent.style.borderRadius = "5px";
divParent.style.textAlign = "center";
divParent.style.margin = "10px";

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

// Ecoute d'event sur la divParent
divParent.addEventListener('click', (event)=> {
    // on incremente le compteur au click
    compteurParent++;
    // Et on remplace les texte de la span par la nouvelle valeur du compteur 
    parentCompteur.innerText = compteurParent;
})

boutonEnfant.addEventListener('click', (event)=> {
    // l'enfant contamine le parent // pour arrete l'evenement 
    event.stopPropagation();
    //
    compteurEnfant++;
    enfantCompteur.innerText = compteurEnfant;
})