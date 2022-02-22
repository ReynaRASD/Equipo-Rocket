/////////////   FUNCIONES POR PRECIO



var seleccion = document.getElementById('preciobajo');
seleccion.addEventListener("click", ()=>{
    seleccion0.className='m-5 btn';
    seleccion1.className='m-5 btn';
    preciobajo();
});
    

  ///

  var seleccion0 = document.getElementById('preciomedio');
  seleccion0.addEventListener("click", ()=>{
    seleccion.className='m-5 btn';
    seleccion1.className='m-5 btn';
    preciomedio();
  });

  ////

  var seleccion1 = document.getElementById('precioalto');
  seleccion1.addEventListener("click", ()=>{
    
    seleccion.className='m-5 btn';
    seleccion0.className='m-5 btn';
    precioalto();
  });



  function preciobajo (){ 
    seleccion.className='m-5 boton';
    reco1.innerHTML = `
           
            <p class="text-ask0">Recomendación por costo<p>
            <p class= "text-comentario">Gama Baja</p>
            <a href="equipos.html#baja"><img src="assets/img/fotogamabaja.jpg" class="img-fluid" style="width:450px;height:350px" alt="..."></a>
            <p class= "text-comentario">Haz click sobre la imagen.</p>
            `
   
            

};
function preciomedio (){
    seleccion0.className='m-5 boton';
    reco1.innerHTML = `
    
    <p class="text-ask0">Recomendación por costo<p>
    <p class= "text-comentario">Gama Media</p>
    <a href="equipos.html#media"><img src="assets/img/fotogamamedia.jpg" class="img-fluid" style="width:450px;height:350px" alt="..."></a>
    <p class= "text-comentario">Haz click sobre la imagen.</p>
    `
};
function precioalto (){
    seleccion1.className='m-5 boton';
    reco1.innerHTML = `
    
    <p class="text-ask0">Recomendación por costo<p>
    <p class= "text-comentario">Gama Alta</p>
    <a href="equipos.html#alta"><img src="assets/img/fotogamaalta.jpeg" class="img-fluid" style="width:450px;height:350px" alt="..."></a>
    <p class= "text-comentario">Haz click sobre la imagen.</p>
    `
   
};







//////////////////////// SEGUN OCUPACION



var seleccion2 = document.getElementById('estu');
  seleccion2.addEventListener("click", () => {
      seleccion2.className='m-3 boton';

      seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';

      reco2.innerHTML = baja;
  });

 

///

var seleccion3 = document.getElementById('ofi');
  seleccion3.addEventListener("click", () => {
      seleccion3.className='m-3 boton';
      seleccion2.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = baja;
  });

//

  var seleccion4 = document.getElementById('program');
  seleccion4.addEventListener("click", () => {
      seleccion4.className='m-3 boton';
      seleccion3.className='m-3 btn';
        seleccion2.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = media;
  });


  //

  var seleccion5 = document.getElementById('arqui');
  seleccion5.addEventListener("click", () => {
      seleccion5.className='m-3 boton';
      seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion2.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = media;
  });

 
//
  var seleccion6 = document.getElementById('stre');
  seleccion6.addEventListener("click", () => {
      seleccion6.className='m-3 boton';
      seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion2.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = alta;
  });

 

  //

  var seleccion7 = document.getElementById('inge');
  seleccion7.addEventListener("click", () => {
      seleccion7.className='m-3 boton';
      seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion2.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = media;
  });
 

  var seleccion8 = document.getElementById('dise');
  seleccion8.addEventListener("click", () => {
      seleccion8.className='m-3 boton';
      seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion2.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = alta;
  });

  

  var seleccion9 = document.getElementById('gamer');
  seleccion9.addEventListener("click", () => {
      seleccion9.className='m-3 boton';
      seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion2.className='m-3 btn';
        seleccion10.className='m-3 btn';
      reco2.innerHTML = alta;
  });

 

  var seleccion10 = document.getElementById('crear');
  seleccion10.addEventListener("click", () => {
    seleccion10.className='m-3 boton';
    seleccion3.className='m-3 btn';
        seleccion4.className='m-3 btn';
        seleccion5.className='m-3 btn';
        seleccion6.className='m-3 btn';
        seleccion7.className='m-3 btn';
        seleccion8.className='m-3 btn';
        seleccion9.className='m-3 btn';
        seleccion2.className='m-3 btn';
      reco2.innerHTML = alta;
      
  });





///////////////////


function baja (){
`

          <p class="text-ask0">Recomendación por ocupación<p>
          <p class= "text-comentario">Gama Baja</p>
          <a href="equipos.html#baja"><img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/c981d478-add9-4f22-a53b-0a86dd6579c2.c48ba28fd36fdbe8a8b27d2fd5fe1fc3.png?odnHeight=2000&odnWidth=2000&odnBg=ffffff" class="img-fluid" style="width:350px;height:350px" alt="..."></a>
          <p class= "text-comentario">Haz click sobre la imagen.</p>
`

}
function media (){
`

          <p class="text-ask0">Recomendación por ocupación<p>
          <p class= "text-comentario">Gama Media</p>
          <a href="equipos.html#media"><img src="https://cdn.shopify.com/s/files/1/0437/8358/5942/products/28ae35fd-92ce-4bcc-b587-5cb083130481_800x.png?v=1642779139" style="width:350px;height:350px" class="img-fluid" alt="..."></a>
          <p class= "text-comentario">Haz click sobre la imagen.</p>
`
}
function alta (){
`

          <p class="text-ask0">Recomendación por ocupación<p>
          <p class= "text-comentario">Gama Alta</p>
          <a href="equipos.html#alta"><img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/b9ed8bde-69b2-4a83-b64d-b57e18b84015.6e62397a117d5203e428bb80b69617a9.png?odnHeight=2000&odnWidth=2000&odnBg=ffffff" class="img-fluid" style="width:350px;height:350px" alt="..."></a>
          <p class= "text-comentario">Haz click sobre la imagen.</p>
`
}






/////////////////////////// OTRA IDEA QUE NO ME SALE
/*
const array = [document.getElementById('preciobajo'), document.getElementById('preciomedio'), document.getElementById('precioalto')];



array[0].addEventListener("click",()=>{
  array[0].className='m-5 boton';
   let a=1; let b=2;
    array[a||b].className='m-5 btn';
});

for (i = 0 ; i<array.length ; i++){
  array[i].className='m-5 boton';
  
}

if(i!=i){
  array[i].className='m-5 boton';
}


array[1].addEventListener("click",()=>{
  array[1].className='m-5 boton';
  array[2].className='m-5 btn';
});



//////////////////////////////////////////////////////////
const arrayocu = [document.getElementById('estu'), document.getElementById('dise'), document.getElementById('program'), document.getElementById('ofi'), document.getElementById('gamer'), document.getElementById('crear'), document.getElementById('inge'), document.getElementById('stre'), document.getElementById('arqui'),];

*/
