// Fonction pour attendre que l'élément soit présent dans le Shadow DOM et le supprimer
function attendreEtSupprimerDansShadowDOM() {
  var interval = setInterval(function() {
      var splineViewer = document.querySelector('spline-viewer');
      if (splineViewer && splineViewer.shadowRoot) {
          var logoElement = splineViewer.shadowRoot.getElementById('logo');
          if (logoElement) {
              logoElement.parentNode.removeChild(logoElement);
              console.log("Élément supprimé avec l'identifiant : logo");
              clearInterval(interval); // Arrêter l'intervalle une fois l'élément supprimé
          } else {
              console.log("Élément non trouvé dans le Shadow DOM, réessayer...");
          }
      } else {
          console.log("Élément <spline-viewer> ou son Shadow DOM non trouvé, réessayer...");
      }
  }, 100); // Vérifier toutes les 100 millisecondes
}

// Exemple d'utilisation
attendreEtSupprimerDansShadowDOM();
