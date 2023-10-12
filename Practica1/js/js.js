//--------------------------------------------------------Declaracion de variables-----------------------------------------------
let finalizarJuego = true;
let jugador1 = 0;
let jugador2 = 0;
//--------------------------------------------------------------Funciones de juego-----------------------------------------------
//En el juago de piedra, papel o tijeras el papel sera el numero 0, la piedra el 1 y la tijera el 2
//0 gana al 1, 1 gana al 2 y 2 gana al 0
const play = (jugadores)=>{
switch (jugadores){
    case 0: alert("No hay jugadores");
    finalizarJuego = false;
    document.getElementById("J1").className = "invisible";
    document.getElementById("J2").className = "invisible";
    document.getElementById("numero-jugadores").className = "invisible";
    break;
    case 1: alert("Jugador 1");
    finalizarJuego = false;
    document.getElementById("J1").className = "btn btn-secondary dropdown-toggle";
    document.getElementById("J2").className = "invisible";
    document.getElementById("numero-jugadores").className = "invisible";
    break;
    case 2: alert("Jugador 2");
    finalizarJuego = false;
    document.getElementById("J1").className = "btn btn-secondary dropdown-toggle";
    document.getElementById("J2").className = "btn btn-secondary dropdown-toggle";
    document.getElementById("numero-jugadores").className = "invisible";
    break;
}
}
const piedra = (jugador)=>{
    alert("Jugador "+jugador+" : Piedra");
}
const papel = (jugador)=>{
    alert("Jugador "+jugador +" : Papel");
}
const tijera = (jugador)=>{
    alert("Jugador "+jugador+" : Tijera");
}

for(let i =1;i<=2;i++){
        document.getElementById("J"+i+"-piedra").onclick =()=> piedra(i);
        document.getElementById("J"+i+"-papel").onclick =()=> papel(i);
        document.getElementById("J"+i+"-tijeras").onclick = ()=>tijera(i);
}
document.getElementById("0jugador").onclick = ()=>play(0);
document.getElementById("1jugador").onclick = ()=>play(1);
document.getElementById("2jugador").onclick = ()=>play(2);

//-----------------------------------------------Finalizar juego-----------------------------------------------
const finalizar = ()=>{
    alert("Finalizar juego");
    document.getElementById("numero-jugadores").className = "dropdown";
    finalizarJuego = true;
}
document.getElementById("btn-finalizar").onclick = finalizar;
