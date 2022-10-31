function inicio (){
    let usuario = prompt(`¡Bienvenido a Fesno Negro! Ingrese su Nombre`)
    let edad = prompt(`¿Cuál es tu edad ${usuario}? Ingresa un número:`)
        while (edad <18){
            alert(`Lo sentimos mucho ${usuario}, debes ser mayor de edad para poder ingresar.`)
        let usuario = prompt(`¡Bienvenido a Fesno Negro! Ingrese su Nombre`)
        }
    let bienvenida = prompt(`¿Es tu primera vez en Fresno Negro? Ingrese Si o No`)
    let rta
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

