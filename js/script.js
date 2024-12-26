// Sélectionner tous les éléments nécessaires
const articles = document.querySelectorAll('.card-body');
const totalElement = document.querySelector('.total');

// Fonction pour mettre à jour le total
function updateTotal() {
    let total = 0;
    articles.forEach(article => {
        const prix = parseFloat(article.querySelector('.unit-price').textContent);
        const quantite = parseInt(article.querySelector('.quantity').textContent);
        total += prix * quantite;
    });
    totalElement.textContent = total.toFixed(2); // Afficher avec 2 décimales
}

// Fonction pour gérer l'augmentation de la quantité
function increaseQuantity(event) {
    const article = event.target.closest('.card-body');
    const quantiteElement = article.querySelector('.quantity');
    let quantite = parseInt(quantiteElement.textContent);
    quantite++;
    quantiteElement.textContent = quantite;
    updateTotal();
}

// Fonction pour gérer la diminution de la quantité
function decreaseQuantity(event) {
    const article = event.target.closest('.card-body');
    const quantiteElement = article.querySelector('.quantity');
    let quantite = parseInt(quantiteElement.textContent);
    if (quantite > 0) {
        quantite--;
        quantiteElement.textContent = quantite;
        updateTotal();
    }
}

// Fonction pour supprimer un article
function deleteArticle(event) {
    const article = event.target.closest('.card-body');
    article.remove();
    updateTotal();
}

// Fonction pour aimer un article
function toggleLike(event) {
    const button = event.target;
    button.classList.toggle('active');
}

// Attacher les événements aux éléments
articles.forEach(article => {
    // Boutons + et -
    const btnPlus = article.querySelector('.fa-plus-circle');
    const btnMoins = article.querySelector('.fa-minus-circle');
    
    btnPlus.addEventListener('click', increaseQuantity);
    btnMoins.addEventListener('click', decreaseQuantity);
    
    // Bouton supprimer
    const btnSupprimer = article.querySelector('.fa-trash-alt');
    btnSupprimer.addEventListener('click', deleteArticle);
    
    // Bouton aimer
    const btnAimer = article.querySelector('.fa-heart');
    //btnAimer.style.color = 'red';
    btnAimer.addEventListener('click', toggleLike);
});

// Initialisation du total au chargement
updateTotal();