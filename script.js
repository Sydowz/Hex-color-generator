let cor;
let colorir = function() {
  cor = '#';
  for (let i = 0; i < 6; ++i) {
    cor += Math.round((Math.random()*15)).toString(16);
  }
  document.body.style.background = cor;
  hex.innerText = cor;
}

window.onload = function() {  
  document.body.addEventListener('click', function(e) {
    if (e.target === hex) return;
    colorir();
  });
  colorir(); 
}