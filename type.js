const codeBlock = document.querySelector('.code-block pre code');
const codes = [
  `<!DOCTYPE html>
<html>
<head>
    <title>Mon premier site</title>
</head>
<body>
    <h1>Bonjour le monde !</h1>
</body>
</html>`,
  // ... d'autres exemples de code
];

let currentIndex = 0;
let charIndex = 0;
const speed = 10; // Vitesse de l'animation
const delayBeforeErase = 3000; // Délai avant de commencer la suppression

function typeCode() {
  if (charIndex < codes[currentIndex].length) {
    codeBlock.textContent = codes[currentIndex].substring(0, charIndex + 1);
    charIndex++;
    Prism.highlightAll();
    setTimeout(typeCode, speed);
  } else {
    setTimeout(smoothErase, delayBeforeErase);
  }
}

function smoothErase() {
  if (charIndex > 0) {
    codeBlock.textContent = codes[currentIndex].substring(0, charIndex - 1);
    charIndex--;
    Prism.highlightAll();
    requestAnimationFrame(smoothErase);
  } else {
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % codes.length;
      charIndex = 0; // Réinitialiser l'index du caractère
      typeCode();
    }, 1000);
  }
}

typeCode();