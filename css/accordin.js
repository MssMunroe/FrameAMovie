// esto para que lo ultimo que cargue sea el js para evitar errores
document.addEventListener("DOMContentLoaded", function () { 
  // esto busca todos los botones que se llamen 'accordion'
  const accordions = document.querySelectorAll(".accordion");

  // cada boton cuando es clicado
  accordions.forEach(button => {
    button.addEventListener("click", function () {
      // buscará la clase 'foro' y será donde se esconderá todo lo que sea 'comentario'
      const foro = this.closest(".foro");
      const comentarios = foro.querySelectorAll(".comentario");

      // y añade o quita visible para que se vea diferente según si esta visible o no
      comentarios.forEach(comentario => {
        comentario.classList.toggle("visible");
      });

      // y lo mismo pasa con open
      this.classList.toggle("open");
    });
  });
});
