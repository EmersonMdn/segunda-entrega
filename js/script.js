//
// INTERACION CON EL DOM
//
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

const addTicket = (priceTicket, nameTicket) => {
    let precio = document.getElementById(priceTicket).innerText;
    //console.log(precio);
    let position = carrito.findIndex(el => el.ticket === nameTicket);

    if (position != -1) {
        carrito[position].cantidad=carrito[position].cantidad+1;
    }else{
        carrito.push({ticket: nameTicket, precio: precio, cantidad: 1});
    }
}
const renderizarElemento = () =>{
    listaCarrito.innerHTML = '';
    let sumaTotal = 0;
    if(carrito.length > 0){
        for (let i = 0; i < carrito.length; i++) {
            let elemento = document.createElement('div');
            elemento.innerHTML = `<p> Ticket: ${carrito[i].ticket} <br>
                                    Cantidad: ${carrito[i].cantidad}</p>`;
        sumaTotal = sumaTotal + (carrito[i].precio * carrito[i].cantidad);
        listaCarrito.append(elemento);
        precioTotal.innerText = `Total a pagar: ${sumaTotal}`;
        }
    }
}

btn1.onclick = function(){
    addTicket('precio-1', 'Niceto Club');
    renderizarElemento();
}

btn2.onclick = function(){
    addTicket('precio-2', 'Emilia Mernes');
    renderizarElemento();
}

btn4.onclick = function(){
    addTicket('precio-4', 'Jam Club');
    renderizarElemento();
}

btn5.onclick = function(){
    addTicket('precio-5', 'Kanaloa Club');
    renderizarElemento();
}

btn6.addEventListener('click',function(){
    addTicket('precio-6', 'Refugio');
    renderizarElemento();
})



