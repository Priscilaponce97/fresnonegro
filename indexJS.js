const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: '¿Eres mayor de edad?',
  color: "grey",
  background: "black",
  text: "Recuerda que para comprar es necesario ser +18",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: "Entendido", 
  cancelButtonText: 'No, ver el catalogo',
  reverseButtons: true
})

const botonBien = document.getElementById ("botonBienve")

botonBien.onclick = async () => {
  const { value: email } = await Swal.fire({
    title: '¡Registrate con tu E-mail!',
    input: 'email',
    inputLabel: 'Recuerda revisar bien antes de aceptar. ¡Recibiras ofertas increibles!',
    inputPlaceholder: 'E-mail'
  })
  
  if (email) {
    Swal.fire(`Se registró: ${email}`)
  }
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