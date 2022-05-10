window.onload = eventListeners;


// Variables
const btnEnviar = document.querySelector('#btnEnviar');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos input
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje-textarea');
const campos_ipt = document.querySelectorAll('form div:not(:last-child)');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListeners();


function eventListeners() {

    // Campos del formulario
    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Enviar mail
    formulario.addEventListener('submit', validarFormulario);
}

// Funciones



// Valida el formulario
function validarFormulario(e) {

    e.preventDefault();

    if (e.target.value === '') {

        // Muestra error en base al target vacío
        borrarError(e.target, 'ipt_error', 'ipt_animation');
        mostrarError('Todos los campos son obligatorios');

    } else {
        // Borrar error al rellenar el target seleccionado
        if (e.target.classList.contains('ipt_error') && e.target.value !== '') {

            e.target.classList.remove('ipt_error');
            e.target.parentElement.classList.add('ipt_animation');

        } else {

            // Si todos los target se encuetran vacío, se agrega error a cada uno de ellos
            borrarError(nombre, 'ipt_error', 'ipt_animation');
            borrarError(email, 'ipt_error', 'ipt_animation');
            borrarError(asunto, 'ipt_error', 'ipt_animation');
            borrarError(mensaje, 'ipt_error', 'ipt_animation');

            // Mensaje de error
            mostrarError('Todos los campos son obligatorios');
        }
    }

    // Si todos los campos se encuetran válidados
    
    // Obtengo el error
    const p_error = document.querySelector('.error');

    if (nombre.value !== '' && er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        
        // Se elimina el error, una vez pasada la validación del punto anterior
        p_error.remove();

        // Mensaje de éxito
        enviarEmail();

        
    }
}

// Mensaje error
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail() {
    // e.preventDefault();

        const salida = document.querySelector('.exito');

        salida ? salida.style.display = 'block' : '';

        // limpiarHTML(parrafo);
        setTimeout(() => {
            salida.remove(); // Elimina el parrafo de éxito a los 5 seg
            formulario.reset();
        }, 5000);


}


function borrarError(element, claseaagregar, claseaborrar) {

    // Agrega error al target seleccionado y deshabilita la animacion input
    element.value === '' ? element.classList.add(claseaagregar) + element.parentElement.classList.remove(claseaborrar) : '';
}

function limpiarHTML(element) {

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}