function inicio (){
    let usuario = prompt(`¡Bienvenido a Fesno Negro! Ingrese su Nombre`);
    let edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`);
    while (edad < 18){
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
        usuario = prompt(`¡Bienvenido a Fesno Negro ${usuario}! Ingrese su Nombre: `);
        edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`);
    }
    let bienvenida = prompt(`¿Es tu primera vez en Fresno Negro? Ingrese Si o No`);

    /* Se agrega mas manipulación del DOM: elimine 2 alert y los reemplace por un cambio en el h1. */

    if (bienvenida.toUpperCase() === "SI"){
        const bienvenidaUsuario = document.getElementById ("tituloBienvenida")
        bienvenidaUsuario.innerText=`Bienvenido/a ${usuario}, tenes un 40% off en tu primera compra!`
    }else {
        const bienvenidaUsuario = document.getElementById ("tituloBienvenida")
        bienvenidaUsuario.innerText=`Bienvenido/a ${usuario} a Fresno Negro`
    }
}
inicio()