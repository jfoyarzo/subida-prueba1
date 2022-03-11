
//Inicio de script con (document).ready para que el script se ejecute luego de que se hayan cargado los elementos del DOM

$(document).ready(function () {

    //Declaración para inicializar los tooltips de los íconos de RRSS en el Footer
    $('[data-toggle="tooltip"]').tooltip()

    //Smooth scroll con velocidad personalizada para cuando se hace click en los links de la navbar que llevan a las distintas secciones de la página
    $('a').click(function () {
        var gato = this.hash

        $('html, body').animate(
            {
                scrollTop: $(gato).offset().top - 20
            },
            1000
        )
    })


})