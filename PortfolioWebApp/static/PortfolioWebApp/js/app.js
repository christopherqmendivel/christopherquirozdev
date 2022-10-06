window.addEventListener('DOMContentLoaded', () => {

  filtrarGaleria();
  animatescrollReveal();
  animateScroll();
  menuHamburguer();
  ajaxContact();
})


  
// Menú RPWD
showHide();

function navbarremoveactive() {
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('ul.menu-nav-links li a');
  const menuLength = menuItem.length
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "active";
    }
  }
}


// Menu hamburguer
function menuHamburguer() {
  const menuresponsive = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuresponsive.addEventListener('click', function () {
    nav.classList.toggle('active');
  });


  // Animate hamburguer
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open')
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open')
      menuOpen = false;
    }
  });
}



// IntersectionObserver
function animatescrollReveal() {

  let scrollReveal = document.querySelectorAll('#scrollReveal'); // Elementos que iniciarán al momento de la acción

  const options = { // definimos opciones al momento de la intersección
    threshold: 0.5,
    delay: 150
  }

  const inViewCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // D evento/ así como la propiedad a usar
        // Aplicamos el estilo en base a la clase css
        entry.target.classList.add('inview');
      } else {
        // OPCIONAL, en caso de acabar la intesección, podemos aplicar una siguiente acción
      }
    });
  }

  // Instancia del callback que contiene nuestros elementos y acciones, usando la clases(css) que definimos and actions, using the options we defined
  let observer = new IntersectionObserver(inViewCallback, options);

  scrollReveal.forEach(e => {
    observer.observe(e) // ejecutamos el observador 
  });
}



// Animate
function animateScroll() {


  let animatemovil = document.querySelectorAll('.animate_m');
  let habilidades = document.querySelectorAll('.contenido-habilidad');
  let habilidad = document.querySelector('div.habilidad');

  if (window.innerWidth < 768) {

    animatemovil.forEach(animate => {
      habilidad.classList.remove('animate');
      animate.classList.add("animate", "fadeInUp");
    });

    habilidades.forEach(animateUp => {
      animateUp.id = "scrollReveal";
      animateUp.classList.add("animate", "fadeInUp");
    });
  }
}



// Hide Header on Scroll
function showHide() {

  let lastScrollTop = 0;
  let header = document.querySelector('header');

  if (window.innerWidth >= 992) {
    window.addEventListener("scroll", function () {

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollTop > lastScrollTop ? header.style.top = "-80px" : header.style.top = "";
    });
  }
}


// Google MAP

var map

function initMap() {
  const myLatLng = {
    lat: 43.461,
    lng: -3.80793
  };
  map = new google.maps.Map(document.querySelector('#mapa'), {
    zoom: 8,
    center: myLatLng,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#263c3f"
        }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#6b9a76"
        }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#38414e"
        }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#212a37"
        }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9ca5b3"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#746855"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#1f2835"
        }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#f3d19c"
        }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#2f3948"
        }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#17263c"
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#515c6d"
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#17263c"
        }],
      },
    ],
  });
  const imageIcon = "static/PortfolioWebApp/img/logomapa.png";
  var icon = {
    url: imageIcon,
    scaledSize: new google.maps.Size(60, 60),
  };
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Santander, Cantabria",
    icon: icon,

  });
}


// Filter galery



function filtrarGaleria() {

  let list = document.querySelectorAll('.list');
  let itemBox = document.querySelectorAll('.card');

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for (let k = 0; k < itemBox.length; k++) {
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
          itemBox[k].classList.remove('hide');
          itemBox[k].classList.add('active');

        }
      }
    })

  }
}

// Send Form
function sendForm() {
  const form = document.querySelector('form');
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';

  const mensajeEviado = document.querySelector('.exito');

  setTimeout(() => {
    spinner.style.display = 'none';
    mensajeEviado ? mensajeEviado.style.display = 'block' : '';

    setTimeout(() => {
      mensajeEviado.remove();
      form.reset();
    }, 4000);
  }, 3000);
}

function ajaxContact() {

  pathname = window.location.pathname;

  if (pathname == '/contacto') {

    // AJAX FORM
    $(document).on('submit', '#form', function (e) {
      e.preventDefault();

      $.ajax({
        type: 'POST',
        url: 'sendform',
        data: {
          nombre: $('#nombre').val(),
          email: $('#email').val(),
          asunto: $('#asunto').val(),
          mensaje: $('#mensaje').val(),
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function () {
          sendForm();
        }
      })
    });

  }
}




// PROYECTS
// HTML - CSS - JS // Migrate to Django BD