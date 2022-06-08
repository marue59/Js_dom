const navbar =[
    {
        titreNav : "TINY PONEY",
    },
    {
        titreNav : "L'Horloge",
    },
    {
        titreNav : "Le FizzBuzz",
    },
    {
        titreNav : "Le Mega FizzBuzz",
    },
]
const cards = [  
    {
    titre : "La liste",
    contenu : "Vous devez créer une liste qui contiendra les noms de 5 personnages de la série 'Firendship is Magic'. Vous pouvez trouver les noms sur ce lien : https://wiki/Personnages Vous générerez une liste html qui affichera les différents noms de personnages",
    link : "../poney/poney.html"
    }, 
    {
    titre : "L'horloge",
    contenu : "Vous devez créer une horloge qui affiche l'heure à l'écran. L'horloge doit se mettre à jour toutes les secondes pour afficher l'heure actuelle.",
    link : "../horloge/horloge.html"
    },
    {
    titre : "Le FizzBuzz",
    contenu : "Vous devez créer une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nom, on    affichera à coté de ce dernier 'fizz' si le nom est un multiple de 3, 'buzz' si le nom est un multiple de 5 et 'fizzbuzz' si le nom est un multiple de 3 et 5. Vous utiliserez une fonction !",
    link : "../fizzbuzz/fizzbuzz.html"
},
    {
    titre : "Mega Fizzbuzz",
    contenu : "Vous devez créer une page qui reprendra la logique du fizzbuzz. Seul un chiffre sera affiché à l'écran (et        fizz/buzz/fizzbuzz si nécessaire) Cette fois, vous utiliserez des boutons pour incrémenter et décrémenter le chiffre. Vous utiliserez une écoute d'événement pour les boutons !",
    link : "../fizzbuzzPlus/fizzbuzzPlus.html"
    }
]


// ======================= METHODES ==============================

//permet de recuperer l'element par son tag / nom html
let body = document.getElementsByTagName('body')[0];
// selection de la div
let divSite = document.getElementById("site");




// ======================= NAV ==============================
// creation d'un element ul
let listeNav = document.createElement("ul");
// insersion de l'element 'ul' dans la div
divSite.appendChild(listeNav);

//On itère sur chaque element de nav
for(let nav of navbar) {
    //On creer un element 'li' à chaque itération ... 
    let puce = document.createElement('li');
    // ... qu'on remplit grace a innerText...
    puce.innerText = `${nav.titreNav}`;
    // ... et qu'on insere ensuite dans la variable 'liste" (qui contient l'element 'ul')
    listeNav.appendChild(puce);

    //fonction de reidrection au click :)
    listeNav.onclick = function () {
    location.href = "https://www.php.net/downloads";
    };
}


// ======================= CARDS ==============================


//inserer dans ces balise du code et interpreter comme du HTml
//liste.innerHTML = `<p>${cards.titre} ${cards.contenu}</p>`;

// creation d'un element div
let container = document.createElement("div");
// insersion de l'element 'div' dans le body
body.appendChild(container);

//On itère sur chaque element de card
for(let card of cards) {
    let ul = document.createElement("ul");
    // on attribut une classe 
    ul.setAttribute('class', 'ul-card')
    container.appendChild(ul);
   

    for (const key in card) {
        if (Object.hasOwnProperty.call(card, key)) {
            const element = card[key];
            if(key != "link") {
            //On creer un element 'li' à chaque itération ... 
            let li = document.createElement("li");
            // on attribut une classe 
            li.setAttribute('class', 'li-card')
            // ... et on insere ensuite dans "ul" l'element 'li')
            ul.appendChild(li);
            // ... qu'on remplit grace a innerHTML.
            li.innerHTML = element;
            }
        }
    }
// ======================= BUTTONS ==============================
    
    let a = document.createElement('a');
  
    //creer l'attribut href
    a.setAttribute('href', card.link);
     // Mettre un button dans les cards
     let buttonCard = document.createElement('button');
     a.appendChild(buttonCard);
     // ... qu'on remplit grace a innerText...
     buttonCard.innerHTML = `${card.titre}`;
     // ... et qu'on insere ensuite dans la variable 'liste" (qui contient l'element 'li')
     ul.appendChild(a);
    
}

// ==================== Styles ===================================
// body
container.style.color = "purple";
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.justifyContent = "space-between";
container.style.listStyle ="none"

// nav
listeNav.style.color = "purple";
listeNav.style.display = "flex";
listeNav.style.flexDirection = "row";
listeNav.style.justifyContent = "space-between";
listeNav.style.backgroundColor = "aliceblue";
listeNav.style.marginBottom = "100px";
listeNav.style.listStyle = "none";
listeNav.style.fontSize = "2.2em";
