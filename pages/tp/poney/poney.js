const poney = [
    {
        titre : "Twilight Sparkle",
        contenu : "Trop mignon",
        couleur : "Rose",
        link : "https://mlp.fandom.com/fr/wiki/Twilight_Sparkle",
    },
    {
        titre : "Applejack",
        contenu : "Trop mignon",
        couleur : "Violet",
        link : "https://mlp.fandom.com/fr/wiki/Applejack",

    },
    {
        titre : "Fluttershy",
        contenu : "Trop mignon",
        couleur : "Rouge",
        link : "https://mlp.fandom.com/fr/wiki/Fluttershy",

    },
    {
        titre : "Rarity",
        contenu : "Trop mignon",
        couleur : "Bleu",
        link : "https://mlp.fandom.com/fr/wiki/Rarity",

    },
    {
        titre : "Pinkie Pie",
        contenu : "trop mignon",
        couleur : "vert",
        link : "https://mlp.fandom.com/fr/wiki/Sweetie_Belle",

    },
]

// ======================= METHODES ==============================

//permet de recuperer l'element par son tag / nom html
let body = document.getElementsByTagName('body')[0];
// creation d'un element div
let divPoney = document.createElement("div");
// insersion de l'element 'div' dans le body
body.appendChild(divPoney);

// ======================= CARDS PONEY ==============================

for(let ponei of poney) {
    let ul = document.createElement("ul");
    // on attribut une classe 
    ul.setAttribute('class', 'ul-poney')
    divPoney.appendChild(ul);

    for (const key in ponei) {
        if (Object.hasOwnProperty.call(ponei, key)) {
            const element = ponei[key];
            if(key != "link") {
            //On creer un element 'li' à chaque itération ... 
            let li = document.createElement("li");
            // on attribut une classe 
            li.setAttribute('class', 'li-ponei')
            // ... et on insere ensuite dans "ul" l'element 'li')
            ul.appendChild(li);
            // ... qu'on remplit grace a innerHTML.
            li.innerHTML = element; 
            }
        }
    }
    // ======================= BUTTONS ==============================
    
    let a = document.createElement('a');
    ul.appendChild(a);
    //creer l'attribut href
    a.setAttribute('href', ponei.link);
     // Mettre un button dans les cards
     let buttonCard = document.createElement('button');
     a.appendChild(buttonCard);
     // ... qu'on remplit grace a innerText...
     buttonCard.innerHTML = `${ponei.titre}`;
     // ... et qu'on insere ensuite dans la variable 'liste" (qui contient l'element 'li')
     ul.appendChild(a);
}
