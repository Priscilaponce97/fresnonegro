/* OBJETOS Y ARRAYS  - carrito*/

function pagProductos () {
let comprarProducto = parseInt (prompt ("¿Qué estas buscando? 1.Bibliotecas - 2.RacksTV - 3.Mesitas de noche"))
    if (comprarProducto === "1.Bibliotecas") {
        parseInt (prompt ("4.Alana - 5.Astrid - 6.Berda - 7.Gerda"));
    }else if (comprarProducto === "2.RacksTV") {
        parseInt (prompt("8.Kaira - 9.Frida - 10.Annika - 11.Anubis"));
    } else if (comprarProducto === "3.Mesitas de noche"){
        parseInt (prompt("12.Freydis - 13.Filipa - 14.Lena - 15.Cala"));
    }
}    
pagProductos ()

const productosArray = [];

class NewProduct{
    constrctor (id,tipoMueble,nombreProducto,precio,demora){
        this.id = id;
        this.tipoMueble = tipoMueble;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.demora = demora;
    }
}
let seguirComprando

while (seguirComprando === true){
    const producto = productosArray.find(
        (product) => product.id === comprarProducto)
        if (producto){
            carrito.push(producto)
        }
}

decision = parsInt (prompt("Deseas seguir comprando? 1.Si 2.No"))
if (decision === 1){
    comprarProducto = parseInt(prompt("Elige el tipo de producto que deseas comprar: 1.Bibliotecas - 2.RacksTV - 3.Mesitas de noche"))
    if (comprarProducto === "1.Bibliotecas") {
        parseInt (prompt ("4.Alana - 5.Astrid - 6.Berda - 7.Gerda"));
    }else if (comprarProducto === "2.RacksTV") {
        parseInt (prompt("8.Kaira - 9.Frida - 10.Annika - 11.Anubis"));
    } else if (comprarProducto === "3.Mesitas de noche"){
        parseInt (prompt("12.Freydis - 13.Filipa - 14.Lena - 15.Cala"));
    }
} else {
    seguirComprando = false
    }

const total = 0
const carrito = [];
carrito.forEach (producto=>{
    total = total + producto.precio
})
alert (`El total de tu compra es ${total}`)

/* RACKS - Objeto de con la infomacion del producto en si + Array para carrito de compras */

const Karia = new NewProduct (8, "RackTV", "Karia", 65000, 10);
productosArray.push (Karia);
const Frida = new NewProduct (9,"RackTV","Frida", 70563, 12);
productosArray.push (Frida);
const Annika = new NewProduct (10,"RackTV","Annika", 58218, 10);
productosArray.push (Annika);
const Anubis = new NewProduct (11,"RackTV","Anubis", 65300, 15);
productosArray.push (Anubis);


class RackTV{
    constructor (nombre, tipo, madera, color1, color2){
        this.nombre = nombre;
        this.tipo = tipo;
        this.madera = madera;
        this.color1 = color1;
        this.color2 = color2;
    }
}
const Rack1 = new RackTV ("KARIA","flotante","melamina","blanco","null");
const Rack2 = new RackTV ("FRIDA","de piso","melamina","negro", "hickory");
const Rack3 = new RackTV ("ANNIKA", "flotante", "melamina", "negro texturado","Gris bruma");
const Rack4 = new RackTV ("ANUBIS", "de piso", "melamina", "roble negro", "null");

/* BIBLIOTECAS - Objeto de con la infomacion del producto en si + Array para carrito de compras */

const Alana = new NewProduct (4, "Bibioteca", "Alana", 34500, 6);
productosArray.push (Alana);
const Astrid = new NewProduct (5,"Bibioteca","Asrtrid", 40793, 9);
productosArray.push (Astrid);
const Berda = new NewProduct (6,"Bibioteca","Berda", 53100, 7);
productosArray.push (Berda);
const Gerda = new NewProduct (7,"Bibioteca","Gerda", 45800, 11);
productosArray.push (Gerda);

class Bibliotecas{
    constructor (nombre, tipo, madera1, madera2, color1, color2){
        this.nombre = nombre;
        this.tipo = tipo;
        this.madera = madera1;
        this.madera = madera2;
        this.color1 = color1;
        this.color1 = color2;
    }
}

const Nordica1 = new Bibliotecas ("ALANA","nordica","melamina","pino cepillado","blanco", "null");
const Nordica2= new Bibliotecas ("ASTRID","nordica","melamina","pino cepillado", "blanco", "null");
const Nordica3 = new Bibliotecas ("BERDA", "escandinava", "melamina","melamina","blanco", "hickory");
const Nordica4 = new Bibliotecas ("GERDA", "escandinava", "melamina", "melamina", "blanco", "roble denver marron trufa");

/* MESITAS DE NOCHE - Objeto de con la infomacion del producto en si + Array para carrito de compras */

const Freydis = new NewProduct (12, "MesaNoche", "Freydis", 20400, 3);
productosArray.push (Freydis);
const Filipa = new NewProduct (13,"MesaNoche","Filipa", 24700, 5);
productosArray.push (Filipa);
const Lena = new NewProduct (14,"MesaNoche","Lena", 20763, 7);
productosArray.push (Lena);
const Cala = new NewProduct (15,"MesaNoche","Cala", 30650, 4);
productosArray.push (Cala);

class MesitasNoche{
    constructor (nombre, tipo, madera1, madera2, color1, color2, cajon, estante){
        this.nombre = nombre;
        this.tipo = tipo;
        this.madera = madera1;
        this.madera = madera2;
        this.color1 = color1;
        this.color1 = color2;
        this.cajon = cajon;
        this.estante = estante;
    }
}

const NocheNordica1 = new MesitasNoche ("FREYDIS","nordica","melamina","melamina","blanco", "hickory", "Si", "Si" );
const NocheNordica2 = new MesitasNoche ("FILIPA","nordica","melamina","pino cepillado", "blanco", "null", "No", "Si");
const NocheSimple = new MesitasNoche ("LENA","basica","melamina", "null", "blanco", "null","Si", "No");
const NocheFlot = new MesitasNoche ("CALA","nordica flotante","melamina", "melamina", "blanco", "hickory","Si", "Si");
