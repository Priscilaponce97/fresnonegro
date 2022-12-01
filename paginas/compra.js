const inputNombre = document.getElementById ("floatingInput");
const inputTelefono = document.getElementById ("floatingPassword");
const enviar = document.getElementById ("botonEnviar");
const titulo = document.getElementById("tituloCompra");

enviar.onclick = (e) => {
e.preventDefault()
    const usuarioCompra = {
        nombre: inputNombre.value,
        contacto: inputTelefono.value
    }
    titulo.textContent = `PEDI TU PRESUPUESTO ${inputNombre.value}`
    inputNombre.value = ""
    inputTelefono.value = ""
localStorage.setItem("infoUsuario",JSON.stringify(usuarioCompra))
}

