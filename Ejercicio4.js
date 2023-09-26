let cont = 0;
const fotos = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const prev = ()=>{
    cont--;
    if(cont<0){
        cont = fotos.length-1;
    }
    document.getElementById("image").src = fotos[cont];
}
const next = ()=>{
    cont++;
    if(cont>=fotos.length){
        cont = 0;
    }
    document.getElementById("image").src = fotos[cont];
}