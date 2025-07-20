function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = carousel.offsetWidth * 0.8;
  carousel.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}
// Firebase SDK inicializado antes (você precisa configurar com suas credenciais)
const avisoRef = firebase.database().ref('quadro_aviso');

avisoRef.on('value', (snapshot) => {
  const aviso = snapshot.val();
  document.getElementById('aviso-conteudo').innerText = aviso || "Sem avisos no momento.";
});

function atualizarAviso() {
  const texto = document.getElementById('novo-aviso').value;
  firebase.database().ref('quadro_aviso').set(texto);
  alert("Aviso atualizado com sucesso!");
}
