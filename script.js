// Mostrar/ocultar navbar al hacer scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 100) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  lastScrollTop = scrollTop;
});

function toggleDetalles(id) {
  const detalles = document.getElementById(id);
  if (detalles.style.display === "none" || detalles.style.display === "") {
    detalles.style.display = "block";
  } else {
    detalles.style.display = "none";
  }
}

// Cambio de idioma (placeholder)
document.getElementById("lang-toggle").addEventListener("click", () => {
  alert("Cambio de idioma aún no implementado.");
});
