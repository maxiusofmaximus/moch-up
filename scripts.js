window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;
    var footerOffset = footer.offsetTop;

    if (scrollPosition + windowHeight >= fullHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
window.addEventListener('scroll', function() {
    var footer = document.getElementById('contacto');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;
    var footerOffset = footer.offsetTop;

    if (scrollPosition + windowHeight >= fullHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contacto'); // Ejemplo de ID de la sección de contacto
    const navbar = document.querySelector('.navbar'); // Ejemplo de selector CSS del navbar
  
    if (isElementInViewport(contactSection)) {
      navbar.style.display = 'none'; // Ocultar el navbar
    } else {
      navbar.style.display = 'flex'; // Mostrar el navbar
    }
  });
function isElementInViewport(element) {
    const elementBottom = element.offsetBottom;
    const elementTop = elementBottom + element.offsetHeight;
    const viewportBottom = window.scrollY;
    const viewportTop = viewportBottom + window.innerHeight;
    return elementBottom <= viewportTop && elementTop >= viewportBottom;
  }