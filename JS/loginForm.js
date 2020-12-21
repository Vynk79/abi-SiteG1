

// Contrôle de la conformité du Mot de passe (8 caractères minimum)
let form = document.querySelector('form');
form.addEventListener('submit', function (e) { 
    let pwd = form.elements.pwd.value;
    let message = "Connexion";
    if (pwd.length < 8) {
            message = "Erreur : Le mot de passe doit contenir au moins 8 caractères";
        }
     else {
        message = "Connexion réussie (envoi sur page accueil en tant qu'utilisateur)";
    }
    document.getElementById('infoMdp').textContent = message;  
    e.preventDefault();
});
