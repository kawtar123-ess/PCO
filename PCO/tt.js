function retablirImage() {
  const grandeImage = document.getElementById("message");
  grandeImage.style.backgroundImage = "";
  grandeImage.textContent = " Hover over an image";
}
function changerImage(element) {
  const message = document.getElementById("message");
  message.style.backgroundImage = `url(${element.src})`;
  message.textContent = element.alt;
}
