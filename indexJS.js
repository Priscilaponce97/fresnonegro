function inicio (){
    let usuario = prompt(`¡Bienvenido a Fesno Negro! Ingrese su Nombre`);
    let edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`);
    while (edad < 18){
        alert(`Lo sentimos mucho, debes ser mayor de edad poder poder ingresar.`);
        usuario = prompt(`¡Bienvenido a Fesno Negro ${usuario}! Ingrese su Nombre: `);
        edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`);
    }
    let bienvenida = prompt(`¿Es tu primera vez en Fresno Negro? Ingrese Si o No`);
    if (bienvenida.toUpperCase() === "SI"){
        const bienvenidaUsuario = document.getElementById ("tituloBienvenida")
        bienvenidaUsuario.innerText=`Bienvenido/a ${usuario} a Fresno Negro`
        const parrafoBienvenida = document.createElement("p")
        parrafoBienvenida.innerText = `${usuario} en tu primera compra obtendras un descuento!`
        p.appendChild(parrafoBienvenida)
        document.body.appendChild
    }else {
        const bienvenidaUsuario = document.getElementById ("tituloBienvenida")
        bienvenidaUsuario.innerText=`Bienvenido ${usuario} a Fresno Negro`
    }
}
inicio()