
class ticket{
    constructor (nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }
}
//
// INTERACION CON EL DOM
//
enlace.addEventListener('click', function() {muestra()});
oculto.onclick = function(){oculta()};

const muestra = () => {
    let elemento = document.getElementById('adicional');
    elemento.className = 'visible nuevo';
    let ocultar = document.getElementById('ocultar');
    ocultar.className = 'visible';
    let enlace = document.getElementById('enlace');
    enlace.className = 'oculto';
}
const oculta = () => {
    let elemento = document.getElementById('adicional');
    elemento.className = 'oculto';
    let ocultar = document.getElementById('ocultar');
    ocultar.className = 'oculto';
    let enlace = document.getElementById('enlace');
    enlace.className = 'visible';
}



//
//CARRITO DE COMPRAS
//
let listaCarrito = document.getElementById('carrito');
let precioTotal = document.getElementById('total');
let carrito = [];

const addTicket = (btn,priceTicket, nameTicket) => {
    let precio = document.getElementById(priceTicket).innerText;
    //console.log(precio);
    let position = carrito.findIndex(el => el.nombre === nameTicket);
    if (position != -1) {
        carrito[position].cantidad++;
        if(carrito[position].cantidad >= 3){
            btn.className = 'btn btn-agotado';
            btn.innerText = 'Llegó al limite';
        }
    }else{
        let nuevoTicket= new ticket(nameTicket, precio,1);
        carrito.push(nuevoTicket);
    }
}
const renderizarElemento = () =>{
    let sumaTotal = 0;
    listaCarrito.innerHTML = '';
    if(carrito.length > 0){
        let vaciar = document.createElement('div');
        vaciar.innerHTML = `<a id="vaciarCarrito" class="btn bg-warning" onclick="vaciarCarro();">Vaciar carrito</a>
        <a id="pagar" class="btn bg-warning" onclick="pago();">Pagar</a>`;
        for (let i = 0; i < carrito.length; i++) {
            let elemento = document.createElement('div');
            elemento.innerHTML = `<p> Ticket: ${carrito[i].nombre} <br>
                                    Cantidad: ${carrito[i].cantidad}</p>`;
        sumaTotal = sumaTotal + (carrito[i].precio * carrito[i].cantidad);
        precioTotal.innerText = `Total a pagar: ${sumaTotal}`;
        listaCarrito.append(elemento, vaciar);
        }
    }
}

const vaciarCarro = () =>{
    localStorage.clear();
    listaCarrito.innerHTML = '';
    precioTotal.innerHTML = '';
    carrito = [];
    document.getElementById('mensaje').innerText ='';
}


//MOSTRAR OBJETOS DEL JSON EN EL LOCAL STORAGE
const renderizarLista = () => {
    let listaTicket = JSON.parse(localStorage.getItem('OnCart'));

    for (let i = 0; i < listaTicket.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<h4>Funcion: ${listaTicket[i].nombre}</h4>
                        <p>Cantidad: ${listaTicket[i].cantidad}</p>`;
        datos.append(div);
        }
}

const pago = () =>{
    console.table(carrito);
    document.getElementById('mensaje').innerText = 'Carrito listo para cobrar'; // MANDADO AL STORAGE


    if (localStorage.getItem('OnCart')) {
        renderizarLista();
    }else{
        localStorage.setItem('OnCart', JSON.stringify(carrito));
        renderizarLista();
    }
}

btn1.onclick = function(){
    addTicket(btn1,'precio-1', 'Niceto Club');
    renderizarElemento();
}

btn2.onclick = function(){
    addTicket(btn2,'precio-2', 'Emilia Mernes');
    renderizarElemento();
}

btn3.onclick = function(){
    addTicket(btn3,'precio-3', 'PH');
    renderizarElemento();
}

btn4.onclick = function(){
    addTicket(btn4,'precio-4', 'Jam Club');
    renderizarElemento();
}

btn5.onclick = function(){
    addTicket(btn5,'precio-5', 'Kanaloa Club');
    renderizarElemento();
}

btn6.addEventListener('click',function(){
    addTicket(btn6,'precio-6', 'Refugio');
    renderizarElemento();
})



