let num = Math.floor(Math.random() * 100) + 1; /* "Math.random" renvoie un nombre flottant pseudo-aléatoire*/
let NbEssais = 0;
function Devine() {
let choisi = document.form1.devine1.value;

NbEssais++;
status = "Nombre d'essais : " + NbEssais;
if (choisi < num) 
    document.form1.indice.value = "Non, le nombre est plus grand.";
if (choisi > num)
    document.form1.indice.value = "Non, le nombre est plus petit.";
if (choisi == num) {
    window.alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
    location.reload();
    }
if (NbEssais == 10) {
    window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
    location.reload(); /* "location.reload" recharge la ressource depuis l'URL actuelle*/
    }
}
