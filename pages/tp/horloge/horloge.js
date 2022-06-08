// methode pour l'heure :

// On creer la fonction showTimes

// On utilise la methode setInterval pour appeler la fonction toutes les secondes.
// 1000ms = 1s
setInterval(showTime, 1000);
function showTime() {
  // On creer l' objet Date ainsi que heures, minutes et secondes
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // on regle la valeur AM/PM en fonction de la valeur de l'heure
    am_pm = "AM";
   // L’ objet Date fonctionne au format 24 heures, nous remettons donc l’heure à 1 lorsqu’elle est supérieure à 12.
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    // L’AM/PM change également en fonction
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  // On creer un string en utilisant le format HH:MM:SS 
  // en changeant l’heure, la minute et la seconde valeur avec les valeurs que nous obtenons des méthodes d’objet Date .
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + " " + am_pm;
  
    document.getElementById("clock").innerHTML = currentTime;
                  
}
// On appele la fonction à la fin pour démarrer au moment exact de rechargement.
showTime();

// ==================== Styles ===================================

document.getElementById("clock").style.backgroundColor = "pink";
