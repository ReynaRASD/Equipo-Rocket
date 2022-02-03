var immg;
let num = 0;


function cambiar(){
    
    
    if(num == 0){
        num += 1;
        immg = "https://images.nvidia.com/geforce-com/international/images/watch-dogs-legion/watch-dogs-legion-dxr-ray-tracing-001-on.jpg";
        document.getElementById('botonaso').innerHTML = "<strong>RTX OFF<strong/>"
        

    }else{
        num -= 1;
        immg = "https://images.nvidia.com/geforce-com/international/images/watch-dogs-legion/watch-dogs-legion-dxr-ray-tracing-001-off.jpg";
        document.getElementById('botonaso').innerHTML = `<strong>RTX ON<strong/>`       
    }
   document.getElementById("watch").src = immg;
}