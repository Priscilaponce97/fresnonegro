function inicio (){
    let usuario = prompt(`¡Bienvenido a Fesno Negro! Ingrese su Nombre`)
    let edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`)
        while (edad <18){
            alert(`Lo sentimos mucho ${usuario}, debes ser mayor de edad para poder ingresar.`)
    let usuario = prompt(`¡Bienvenido a Fesno Negro! Ingrese su Nombre`)
    let edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`)
        }
    let bienvenida = prompt(`¿Es tu primera vez en Fresno Negro? Ingrese Si o No`)
    let rta
    if (bienvenida === "Si"){
        alert(`Bienvenido/a ${usuario}, es un placer tenerte con nosotros! Obtendras un descuento en tu primera compra`)
    }else {
        alert(`Bienvenido/a nuevamente ${usuario}, nos alegra verte otra vez!`)
    }
}
inicio()

let cocina
let gastototal
let tipo
let compra = (`Desea realizar una compra? Si No`)
    if(compra === "Si")
        tipo = prompt (`Elige una categoría: cocina baño`)
    if(tipo==="cocina"){
        cocina = prompt (`Elige un producto: BajoMesada AltoMesada`)
            if(cocina === "BajoMesada")
                precio = 40000
            }else if (cocina==="AltoMesada"){
                precio=45000
    }