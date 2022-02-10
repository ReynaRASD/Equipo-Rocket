///////////////////// SEGUN PRESUPUESTO

var selectPriceBajo = () => {
    
    var preciobajo = document.getElementById('preciobajo');
    preciobajo.className='boton';

    let precioBajo = true;
    console.log(precioBajo);
}

var selectPriceMedio = () => {
    
    var preciomedio = document.getElementById('preciomedio');
    preciomedio.className='boton';

    let precioMedio = true;
    console.log(precioMedio);
}

var selectPriceAlto = () => {

    var precioalto = document.getElementById('precioalto');
    precioalto.className='boton';

    let precioAlto = true;
    console.log(precioAlto);
}




//////////////////////// SEGUN OCUPACION
/// baja
var estudiante = () => {
    var estu = document.getElementById('estu');
    estu.className='boton';
    let ocupacionBajo = true;
    console.log(ocupacionBajo);
}
var oficinista = () => {
    var ofi = document.getElementById('ofi');
    ofi.className='boton';
    let ocupacionBajo = true;
    console.log(ocupacionBajo);
}

///media
var programador = () => {
    var program = document.getElementById('program');
    program.className='boton';
    let ocupacionMedio = true;
    console.log(ocupacionMedio);
}
var arquitecto = () => {
    var arqui = document.getElementById('arqui');
    arqui.className='boton';
    let ocupacionMedio = true;
    console.log(ocupacionMedio);
}
var streaming = () => {
    var stre = document.getElementById('stre');
    stre.className='boton';
    let ocupacionMedio = true;
    console.log(ocupacionMedio);
}
var ingeniero = () => {
    var inge = document.getElementById('inge');
    inge.className='boton';
    let ocupacionMedio = true;
    console.log(ocupacionMedio);
}


//// alta
var disenador = () => {
    var dise = document.getElementById('dise');
    dise.className='boton';
    let ocupacionAlto = true;
    console.log(ocupacionAlto);
}
var gamer = () => {
    var gamer = document.getElementById('gamer');
    gamer.className='boton';
    let ocupacionAlto = true;
    console.log(ocupacionAlto);
}
var crearContenido = () => {
    var crear = document.getElementById('crear');
    crear.className='boton';
    let ocupacionAlto = true;
    console.log(ocupacionAlto);
}






var recomendacion = () => {
    if(precioBajo == true && ocupacionBajo == true) {
        console.log("gama baja");
    }else if(precioMedio==true && ocupacionMedio == true){
        console.log("gama media");
    }else if(precioAlto == true && ocupacionAlto == true){
        console.log("gama alta");
    }
}