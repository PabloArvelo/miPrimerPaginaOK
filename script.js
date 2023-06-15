function showAlert() { alert('¡Hola, esta es una alerta desde JavaScrpt!'); }

/* Agregar JavaScript para alternar la visibilidad de los enlaces de navegación cuando 
se haga clic en el botón “Menú”. 
Este código agrega un detector de eventos al botón “Menú” que alterna la clase
 “nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic. */

 document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})