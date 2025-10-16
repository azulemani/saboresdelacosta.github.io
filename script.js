// Obtener el botón
const btnSubir = document.getElementById("btnSubir");

// Mostrar el botón cuando se baja 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnSubir.style.display = "block";
  } else {
    btnSubir.style.display = "none";
  }
};

// Al hacer clic, subir al inicio
btnSubir.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
