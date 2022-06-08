// ======================= METHODES ==============================
//permet de recuperer l'element par son tag / nom html
let body = document.getElementsByTagName('body')[0];
// selection de la div
let divFizzbuzz= document.getElementById("fizzbuzzPlus");

// creation d'un element div
let container = document.createElement("div");
// insersion de l'element 'div' dans la divFizzbuzz
divFizzbuzz.appendChild(container);

for (let nombre = 1; nombre <= 100; nombre++) {

    let divFizzbuzz = document.getElementById('fizzbuzzPlus');

    let compteur = document.getElementById('compteurNombre');

    // Ecoute d'event sur la divParent
    divFizzbuzz.addEventListener('click', (event)=> {

    // Message à afficher, initialement vide
    let message = ""; 
    if (nombre % 3 === 0) {
        // Nombre divisible par 3 : on ajoute "Fizz" au message
        message += ' => Fizz';
    }
    if (nombre % 5 === 0) {
        // Nombre divisible par 5 : on ajoute "Buzz" au message
        message += " => Buzz ";
    }
    if (nombre % 15 === 0) {
        // Nombre divisible par 15 : on ajoute "FizzBuzz" au message
        message += " => FizzBuzz !!!";
    }
    if (message === "") {
        // Si message est vide, le nombre n'est divisible ni par 3, ni par 5 :
        // le message affiché sera le nombre
        message = "";
    }
    // on incremente le compteur au click
    nombre++;
    // Et on remplace les texte de la span par la nouvelle valeur du compteur 
    compteur.innerText = nombre + message;
    
})

}
