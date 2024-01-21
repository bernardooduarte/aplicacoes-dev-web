// função do menu dropdown
function menu() {
  document.getElementById("meuDropdown").classList.toggle("mostrar");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("conteudo-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var abrirDropdown = dropdowns[i];
      if (abrirDropdown.classList.contains("mostrar")) {
        abrirDropdown.classList.remove("mostrar");
      }
    }
  }
};

//função do carrossel de imagens
var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});
