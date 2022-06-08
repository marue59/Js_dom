// on initialise la variable a zero
let compte = 0;

//On récupere l'element ayant pour ID'compte' ( ici notre span)
let compteurElement = document.getElementById("compte");

//On récupere notre boutton incrémenter
let incrementButton = document.getElementById("incrementer");
// on ajoute l'ecoute d'evenement click sur le bouton
incrementButton.addEventListener("click", (/*event*/)=> {
    // On incremente le compteur lorsque cliqué
    compte = compte +1;
    // On affecte la valeur du compteu a notre span 'compte Element'
    compteurElement.innerText = compte;

    //Empeche le comportement par defaut et on le remplace par exemple le submit
    //event.preventDefault();
})