var immg;
let isOff = false;

function cambiar(){
    
    if(isOff == true){
        immg = "./assets/img/demo-rtx-on.jpg";
        document.getElementById('botonaso').innerHTML = `<strong>RTX ON<strong/>` 
        isOff = false;
    }else{
        immg = "./assets/img/demo-rtx-off.jpg";
        document.getElementById('botonaso').innerHTML = "<strong>RTX OFF<strong/>"   
        isOff = true;  
    }
   document.getElementById("watch").src = immg;
} 
