// DOM
const touches = [...document.querySelectorAll('.bouton')]; /*récupère les touches de la calculatrice*/
const listeKeycode = touches.map(touche => touche.dataset.key); /* prend chaque élément de notre tableau touches et en récupéré la valeur de datakey*/
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => { /*dès que la touche sera pressée un evenement va ce déclenché*/
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})