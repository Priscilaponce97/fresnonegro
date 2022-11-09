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
        alert(`Bienvenido/a ${usuario}, es un placer tenerte con nosotros! Obtendras un descuento en tu primera compra`);
    }else {
        alert(`Bienvenido/a nuevamente ${usuario}, nos alegra verte otra vez!`);
    }
}
inicio()