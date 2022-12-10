const divCard = document.querySelector(".cards");
const lista = document.querySelector("#lista");
const filtro = document.querySelector ("#filtrar");

const mostrarCategorias = async() => {
    const categoriasFetch = await fetch ("tipoMuebleCate.json");
    const categoriasJson = await categoriasFetch.json ();
    console.log(categoriasJson) 
    categoriasJson.forEach((cate) => {
        const option = document.createElement("option")
        option.innerText = `${cate}`
        lista.append(option)
    })
}
mostrarCategorias()

const categorias= async () => {
    const categoriasFetch = await fetch ("tipoMuebleCate.json")
    const categoriasJson = await categoriasFetch.json ()
    categoriasJson.forEach((cate) => {
        const option = document.createElement("option")
        botonProductos.innerText = `${cate}`
        lista.append(option)
    })
}
const buscarPorCat = async () => {
    divCard.innerHTML = ""
    const categoriaElegida = lista.value
    const productosFetch = await fetch (productos.json)
    const productosJson = await productosFetch.json()
    const productosFiltrados = productosJson.filter (prod=>prod.tipoMueble===categoriaElegida)
    productosFiltrados.forEach((prod) =>{
        const {id, tipoMueble, nombreProducto, precio, demora} = prod
        divCard.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
    })
}

const buscarProductos = async () => {
    const productosFetch = await fetch("productos.json")
    const productosJson = await productosFetch.json ()
    console.log(productosJson);
    productosJson.forEach(prod=>{
        const {id,tipoMueble,nombreProducto,precio,demora,imagen} = prod;
        divCard.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${imagen} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${tipoMueble}</h5>
        <p class="card-text"> ${nombreProducto} </p>
        <p>${precio}</p>
        <p>Demora aproximada para la entrega: ${demora} días. </p>
        <button id=${id} class="btn btn-primary"> AGREGAR </button>
        </div>
    </div>
    `
    });
}

buscarProductos ()





/* const botonfiltro = document.getElementById ("botonProductos")

botonfiltro.onclick = () => {
    fetch ("productos.json")
    .then (Response => Response.json ())
    .then (Response=>console.log(Response.results))
    .catch (error => console.log(error))
}  */

/* const productosArray = [];

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
alert(`El total de su compra es de $${totalCompra}`) */


/*Se aplican OBJETOS para agrupar la informacion de cada producto. Decidí no aplicar Operadores avanzados
ya que el codigo se me haría mucho mas extendido.*/

/* class RackTV{
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
const NocheFlot = new MesitasNoche ("CALA","nordica flotante","melamina", "melamina", "blanco", "hickory","Si", "Si");  */

