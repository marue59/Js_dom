// ======================= METHODES ==============================
//permet de recuperer l'element par son tag / nom html
let body = document.getElementsByTagName('body')[0];
// selection de la div
let divFizzbuzz= document.getElementById("fizzbuzz");

// creation d'un element div
let container = document.createElement("div");
// insersion de l'element 'div' dans la divFizzbuzz
divFizzbuzz.appendChild(container);

for (let nombre = 1; nombre <= 100; nombre++) {
    let p = document.createElement("p");
    // on attribut une classe
    p.setAttribute('class', 'card')
    

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
    container.appendChild(p);
    p.innerHTML = nombre + message;
}

