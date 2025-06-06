document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const panel = this.nextElementSibling;

      // Cierra otros paneles si deseas un solo abierto a la vez
      accordions.forEach((acc) => {
        if (acc !== this) {
          acc.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle actual
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});