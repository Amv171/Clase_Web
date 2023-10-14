//--------------------------------------------------------Declaracion de variables-----------------------------------------------
let finalizarJuego = true;
let jugador1 = -1;
let jugador2 = -1;
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
document.getElementById("0jugador").onclick = ()=>play(0);
document.getElementById("1jugador").onclick = ()=>play(1);
document.getElementById("2jugador").onclick = ()=>play(2);
const ganador = (jugador1, jugador2)=>{
    if(jugador1 == 0 && jugador2 == 1){ //Jugador 1: piedra, Jugador 2: papel
        alert("Gana el jugador 2");
        return 2;
    }
    else if(jugador1 == 0 && jugador2 == 2){ //Jugador1: piedra, Jugador 2: tijera
        alert("Gana el jugador 1");
        return 1;
    }
    else if(jugador1 == 1 && jugador2 == 0){ //Jugador 1: papel, Jugador 2: piedra
        alert("Gana el jugador 1");
        return 1;
    }
    else if(jugador1 == 1 && jugador2 == 2){//Jugador 1: papel, Jugador 2: tijera
        alert("Gana el jugador 2");
        return 2;
    }
    else if(jugador1 == 2 && jugador2 == 0){//Jugador 1: tijera, Jugador 2: piedra
        alert("Gana el jugador 2");
        return 2;
    }
    else if(jugador1 == 2 && jugador2 == 1){//jugador 1: tijera, Jugador 2: papel
        alert("Gana el jugador 1");
        return 1;
    }
    else{
        alert("Empate");
        return 0;
    }
}
document.getElementById("J1-piedra").onclick =()=> {if(jugador1 === -1)
    {alert("Jugador 1: Piedra"); jugador1 = 0;document.getElementById("J1-img").src="../img/piedra.png"}
}
document.getElementById("J1-papel").onclick =()=> {if(jugador1 === -1)
    {alert("Jugador 1: Papel"); jugador1 = 1;document.getElementById("J1-img").src="../img/papel.jpg"}
}
document.getElementById("J1-tijeras").onclick = ()=>{if(jugador1 === -1)
    {alert("Jugador 1: Tijera"); jugador1 = 2;document.getElementById("J1-img").src="../img/tijeras.jpg"}
}
document.getElementById("J2-piedra").onclick =()=> {if(jugador2 === -1)
    {alert("Jugador 2: Piedra"); jugador2 = 0;document.getElementById("J2-img").src="../img/piedra.png"}
}
document.getElementById("J2-papel").onclick =()=> {if(jugador2 === -1)
    {alert("Jugador 2: Papel"); jugador2 = 1;document.getElementById("J2-img").src="../img/papel.jpg"}
}
document.getElementById("J2-tijeras").onclick = ()=>{if(jugador2 === -1)
    {alert("Jugador 2: Tijera"); jugador2 = 2;document.getElementById("J2-img").src="../img/tijeras.jpg"}
}
//-----------------------------------------------Finalizar juego-----------------------------------------------
const finalizar = ()=>{
    alert("Finalizar juego");
    document.getElementById("numero-jugadores").className = "dropdown";
    document.getElementById("J1").className = "invisible";
    document.getElementById("J2").className = "invisible";
    finalizarJuego = true;
}
document.getElementById("btn-finalizar").onclick = finalizar;
document.getElementById("btn-juego").onclick = ()=>{if(jugador1 !=-1 && jugador2 != -1){
    ganador(jugador1,jugador2);
    jugador1 = -1;
    jugador2 = -1;
    document.getElementById("J1-img").src="../img/default.webp"
    document.getElementById("J2-img").src="../img/default.webp"
}
    else{
        alert("Seleccione para ambos jugadores");
    }
}
