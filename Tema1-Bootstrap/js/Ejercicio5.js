let cont = 0;
const completar = (id)=>{
    document.getElementById(id).style.textDecoration = "line-through";
}
const eliminar = (id)=>{
    document.getElementById(id).remove();
}
const add = ()=>{
    let tarea = document.getElementById("texto").value;
    document.getElementById("lista").innerHTML += "<li id = '"+cont+"'>"+tarea+" <button id='el"+cont+"' onclick = 'eliminar("+cont+")'>Eliminar</button><button id='com"+cont+"' onclick = 'completar("+cont+")'>Completar</button></li>"
    cont++;
    alert(cont);
    document.getElementById("texto").value = "";
}
document.getElementById("boton").onclick = add;
