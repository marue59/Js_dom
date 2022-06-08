/*
// declarer un objet Js
const eleve = {
    nom: 'Halliday',
    prenom: 'Johnny',
    age: '80'
}

// Selection de la div
// utiliser document = représente html
// .getElementById => je veux recuperer l'element qui possede eleve
let divEleve = document.getElementById("eleve");

//inserer dans ces balise du code et interpreter comme du HTml
divEleve.innerHTML = `<p>${eleve.prenom} ${eleve.nom} est agé de ${eleve.age}</p>`;
*/

//------------------------------------------------------------------------------------------------------------
// Recuperer une liste d'eleve.

const eleves = [ 
    {
    nom: 'Halliday',
    prenom: 'Johnny',
    age: '78'
    }, 
    {
    nom: 'Decoux',
    prenom: 'Paul',
    age: '31'
    },
    {
    nom: 'Defretin',
    prenom: 'Marie',
    age: '24'
    }  
]
// selection de la div
let divEleve = document.getElementById("eleve");
// creation d'un element ul
let liste = document.createElement("ul");
// insersion de l'element 'ul' dans la div
divEleve.appendChild(liste);

// 2 manieres d'inserer : 

// ======================METHODE SALE ===========================================================//
// 2 methodes => html => un peu sale
/*
// 1 : 
// declaration d'une variable vide pour contenir les elements de la liste
let liEleves = "";

// on itère sur chaque element de la liste d'objets 'eleves'
for (let eleve of eleves) {
    liEleves += `<li>${eleve.nom}${eleve.prenom} est agé de : ${eleve.age}</li>`
}
// Puis on insere cette looooongue chaine de caractère dans notre liste 'ul'
//recuperer la liste et la passer dans html
liste.innerHTML = liEleves;
*/

// ======================METHODE PROPRE ===========================================================//
// 2 :
//On itère sur chaque element de eleves
for(let eleve of eleves) {
    //On creer un element 'li' à chaque itération ... 
    let puce = document.createElement('li');
    // ... qu'on remplit grace a innerText...
    puce.innerText = `${eleve.prenom} ${eleve.nom} est agé de ${eleve.age}`;
    // ... et qu'on insere ensuite dans la variable 'liste" (qui contient l'element 'ul')
    liste.appendChild(puce);
}