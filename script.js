var moveButton = document.querySelector("button:nth-child(2)");

var correctlyButton = document.querySelector("button:first-child");

moveButton.addEventListener("mouseover", function () {
  var vertical = Math.floor(Math.random() * 200);
  var horizontal = Math.floor(Math.random() * 200);
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "px";
  moveButton.style.top = horizontal + "px";
});

correctlyButton.addEventListener("click", function () {
  alert("Resposta Correta! Meu pix é o celular!");
});
