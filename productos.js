const productosArray = [];

class NewProduct{
    constructor (id,tipoMueble,nombreProducto,precio,demora){
        this.id = id;
        this.tipoMueble = tipoMueble;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.demora = demora;
    }
}
const Karia = new NewProduct (8, "RackTV", "Karia", 65000, 10);
productosArray.push (Karia);
const Frida = new NewProduct (9,"RackTV","Frida", 70563, 12);
productosArray.push (Frida);
const Annika = new NewProduct (10,"RackTV","Annika", 58218, 10);
productosArray.push (Annika);
const Anubis = new NewProduct (11,"RackTV","Anubis", 65300, 15);
productosArray.push (Anubis);

const Alana = new NewProduct (4, "Bibioteca", "Alana", 34500, 6);
productosArray.push (Alana);
const Astrid = new NewProduct (5,"Bibioteca","Asrtrid", 40793, 9);
productosArray.push (Astrid);
const Berda = new NewProduct (6,"Bibioteca","Berda", 53100, 7);
productosArray.push (Berda);
const Gerda = new NewProduct (7,"Bibioteca","Gerda", 45800, 11);
productosArray.push (Gerda);

const Freydis = new NewProduct (12, "MesaNoche", "Freydis", 20400, 3);
productosArray.push (Freydis);
const Filipa = new NewProduct (13,"MesaNoche","Filipa", 24700, 5);
productosArray.push (Filipa);
const Lena = new NewProduct (14,"MesaNoche","Lena", 20763, 7);
productosArray.push (Lena);
const Cala = new NewProduct (15,"MesaNoche","Cala", 30650, 4);
productosArray.push (Cala);

let seguirComprando = true
const carrito = []
while (seguirComprando === true){
    let productoElegido
    let comprarProducto = parseInt (prompt ("¿Qué estas buscando? 1.Bibliotecas - 2.RacksTV - 3.Mesitas de noche"))
    if (comprarProducto === 1) {
        productoElegido = parseInt (prompt ("4.Alana - 5.Astrid - 6.Berda - 7.Gerda"));
    }else if (comprarProducto === 2) {
        productoElegido = parseInt (prompt("8.Kaira - 9.Frida - 10.Annika - 11.Anubis"));
    } else if (comprarProducto === 3){
        productoElegido = parseInt (prompt("12.Freydis - 13.Filipa - 14.Lena - 15.Cala"));
    }
    carrito.push(productosArray[productoElegido])
    console.log(carrito);
    let decision = parseInt (prompt("Deseas seguir comprando? 1.Si 2.No"))
    if(decision === 2){
        seguirComprando = false
    }
}
console.log(carrito);

totalCompra = carrito.map(producto => producto.precio).reduce((a, b) => a + b)
console.log(totalCompra);
alert(`El total de su compra es de $${totalCompra}`)