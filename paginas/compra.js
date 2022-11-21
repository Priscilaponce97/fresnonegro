const inputNombre = document.getElementById ("floatingInput");
const inputTelefono = document.getElementById ("floatingPassword");
const enviar = document.getElementById ("botonEnviar");

enviar.onclick = () => {
    const usuarioCompra = {
        nombre: inputNombre.value,
        contacto: inputTelefono.value
    }
    inputNombre.value = ""
    inputTelefono.value = ""
localStorage.setItem(infoUsuario,JSON.stringify(usuarioCompra))
}