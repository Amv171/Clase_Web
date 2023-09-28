
const area = ()=>{
let triangulo = document.getElementById("triangulo").checked;
let rectangulo = document.getElementById("rectangulo").checked;
    let altura = parseFloat(document.getElementById("altura").value) ;
    let base = parseFloat(document.getElementById("base").value);
    if(triangulo && rectangulo){
        alert("No puedes poner los dos");
    }
    else if(triangulo){
    document.getElementById("reultado").value = (altura*base)/2;   
    }
    else if(rectangulo){
        document.getElementById("reultado").value = (altura*base);   
    }

    
}
document.getElementById("calcular").onclick = area;
