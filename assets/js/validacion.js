(function () {

    // Selecciona el formulario y deshabilita validación nativa
    var forms = document.querySelectorAll('.needs-validation');

    // Evitar el envío del form si no son válidos los campos
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                window.alert('Hubo un dato incorrecto')
            }

        }, false);
    });

    // Validación del campo de mensaje
    var mensajeInput = document.getElementById('email');
    mensajeInput.addEventListener('input', function() {
        var feedbackElement = mensajeInput.nextElementSibling;    
        if(!esEmailValido(mensajeInput.value)) {
            mensajeInput.classList.add('is-invalid');
            feedbackElement.textContent = 'El email es incorrecto';
        } else {
            console.log('Entre')
            mensajeInput.classList.remove('is-invalid');
            feedbackElement.textContent = '';
        }
    });

    // Validación del campo de número telefónico
    var telefonoInput = document.getElementById('telefono');
    telefonoInput.addEventListener('input', function() {
        var feedbackElement = telefonoInput.nextElementSibling;
        var telefonoValue = telefonoInput.value;

        if (!esTelefonoValido(telefonoValue)) {
            telefonoInput.classList.add('is-invalid');
            feedbackElement.textContent = 'El número telefónico es incorrecto';
        } else {
            telefonoInput.classList.remove('is-invalid');
            feedbackElement.textContent = '';
        }
    });


    function esEmailValido(email) {
        // Expresión regular email
        var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        return expresionRegular.test(email);
    }

    function esTelefonoValido(telefono) {
        // Expresión regular telefónico
        var expresionRegular = /^(\+?54|0)(\d{2})?(\d{2})?(\d{4})(\d{4})$/;

        return expresionRegular.test(telefono);
    }

})();


//mensajeInput.value.length;