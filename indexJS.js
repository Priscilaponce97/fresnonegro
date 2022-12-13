const { value: formValues } = await Swal.fire({
  title: 'Multiple inputs',
  html:
    '<input id="swal-input1" class="swal2-input">' +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
})

if (formValues) {
  Swal.fire(JSON.stringify(formValues))
}
  
/*     let edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`);
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

    if (bienvenida.toUpperCase() === "SI"){
        const bienvenidaUsuario = document.getElementById ("tituloBienvenida")
        bienvenidaUsuario.innerText=`Bienvenido/a ${usuario}, tenes un 40% off en tu primera compra!`
    }else {
        const bienvenidaUsuario = document.getElementById ("tituloBienvenida")
        bienvenidaUsuario.innerText=`Bienvenido/a ${usuario} a Fresno Negro`
    }
 */