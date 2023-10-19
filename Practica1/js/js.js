//--------------------------------------------------------Declaracion de variables-----------------------------------------------
let finalizarJuego = true;
let jugador1 = -1;
let jugador2 = -1;
let jugador1_aviable = false;
let jugador2_aviable = false;
let jugador1_score = 0;
let jugador2_score = 0;
let default_cont = 3;
//--------------------------------------------------------Funcion para numero aleatorio---------------------------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//--------------------------------------------------------------Funciones de juego-----------------------------------------------
//En el juago de piedra, papel o tijeras el papel sera el numero 0, la piedra el 1 y la tijera el 2
//0 gana al 1, 1 gana al 2 y 2 gana al 0
const play = (jugadores)=>{
switch (jugadores){
    case 0: alert("No hay jugadores");
    finalizarJuego = false;
    jugador1_aviable = false;
    jugador2_aviable = false;
    document.getElementById("J1").className = "invisible";
    document.getElementById("J2").className = "invisible";
    document.getElementById("numero-jugadores").className = "invisible";
   document.getElementById("btn-juego").onclick = ()=>{
    seleccion_aleatoria(1);seleccion_aleatoria(2);
    setTimeout(() => {
        if(jugador1 !=-1 && jugador2 != -1){
            ganador(jugador1,jugador2);
            jugador1 = -1;
            jugador2 = -1;
            document.getElementById("J1-img").src="../img/default.jpg"
            document.getElementById("J2-img").src="../img/default.jpg"
            document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
            document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
        }
            else{
                alert("Seleccione para ambos jugadores");
            }
    }, 1000);
   
}
    break;
    case 1: alert("Jugador 1");
    finalizarJuego = false;
    jugador1_aviable = true;
    jugador2_aviable = false;
    document.getElementById("J1").className = "btn btn-secondary dropdown-toggle";
    document.getElementById("J2").className = "invisible";
    document.getElementById("numero-jugadores").className = "invisible";
    document.getElementById("btn-juego").onclick = ()=>{if(jugador1 !=-1 ){
        setTimeout(()=>{seleccion_aleatoria(2);},1000); 
        ganador(jugador1,jugador2);
        jugador1 = -1;
        jugador2 = -1;
        document.getElementById("J1-img").src="../img/default.jpg"
        document.getElementById("J2-img").src="../img/default.jpg"
        document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
        document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
    }
        else{
            alert("Seleccione para ambos jugadores");
        }
    }
    break;
    case 2: alert("Jugador 2");
    finalizarJuego = false;
    jugador1_aviable = true;
    jugador2_aviable = true;
    document.getElementById("J1").className = "btn btn-secondary dropdown-toggle";
    document.getElementById("J2").className = "btn btn-secondary dropdown-toggle";
    document.getElementById("numero-jugadores").className = "invisible";
    document.getElementById("btn-juego").onclick = ()=>{if(jugador1 !=-1 && jugador2 != -1){
        ganador(jugador1,jugador2);
        jugador1 = -1;
        jugador2 = -1;
        document.getElementById("J1-img").src="../img/default.jpg"
        document.getElementById("J2-img").src="../img/default.jpg"
        document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
        document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
    }
        else{
            alert("Seleccione para ambos jugadores");
        }
    }

    break;
}
}
//_____________Funcion para el generado aleatorio de piedra papel o tijera_______________________
const seleccion_aleatoria = (jugador)=>{
    if(jugador === 1){
        jugador1 = getRandomInt(3);
        switch(jugador1){
        case 0: document.getElementById("J1-img").src="../img/piedra.png";break;
        case 1: document.getElementById("J1-img").src="../img/papel.jpg";break;
        case 2: document.getElementById("J1-img").src="../img/tijeras.jpg";break;
    }
    }
    else if(jugador === 2){
        jugador2 = getRandomInt(3);
        switch(jugador2){
            case 0: document.getElementById("J2-img").src="../img/piedra.png";break;
            case 1: document.getElementById("J2-img").src="../img/papel.jpg";break;
            case 2: document.getElementById("J2-img").src="../img/tijeras.jpg";break;
        }
    }
}
document.getElementById("0jugador").onclick = ()=>play(0);
document.getElementById("1jugador").onclick = ()=>play(1);
document.getElementById("2jugador").onclick = ()=>play(2);
const ganador = (jugador1, jugador2)=>{
    if(jugador1 == 0 && jugador2 == 1){ //Jugador 1: piedra, Jugador 2: papel
        alert("Gana el jugador 2");
        jugador2_score++;
        return 2;
    }
    else if(jugador1 == 0 && jugador2 == 2){ //Jugador1: piedra, Jugador 2: tijera
        alert("Gana el jugador 1");
        jugador1_score++;
        return 1;
    }
    else if(jugador1 == 1 && jugador2 == 0){ //Jugador 1: papel, Jugador 2: piedra
        alert("Gana el jugador 1");
        jugador1_score++;
        return 1;
    }
    else if(jugador1 == 1 && jugador2 == 2){//Jugador 1: papel, Jugador 2: tijera
        alert("Gana el jugador 2");
        jugador2_score++;
        return 2;
    }
    else if(jugador1 == 2 && jugador2 == 0){//Jugador 1: tijera, Jugador 2: piedra
        alert("Gana el jugador 2");
        jugador2_score++;
        return 2;
    }
    else if(jugador1 == 2 && jugador2 == 1){//jugador 1: tijera, Jugador 2: papel
        alert("Gana el jugador 1");
        jugador1_score++;
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
document.getElementById("J2-piedra").onclick =()=> {if(jugador2 === -1 && jugador1 != -1)
    {alert("Jugador 2: Piedra"); jugador2 = 0;document.getElementById("J2-img").src="../img/piedra.png"}
}
document.getElementById("J2-papel").onclick =()=> {if(jugador2 === -1&& jugador1 != -1)
    {alert("Jugador 2: Papel"); jugador2 = 1;document.getElementById("J2-img").src="../img/papel.jpg"}
}
document.getElementById("J2-tijeras").onclick = ()=>{if(jugador2 === -1&& jugador1 != -1)
    {alert("Jugador 2: Tijera"); jugador2 = 2;document.getElementById("J2-img").src="../img/tijeras.jpg"}
}
//-----------------------------------------------Finalizar juego-----------------------------------------------
const finalizar = ()=>{
    alert("Finalizar juego");
    document.getElementById("numero-jugadores").className = "dropdown";
    document.getElementById("J1").className = "invisible";
    document.getElementById("J2").className = "invisible";
    document.getElementById("J1-score").innerHTML = "Score = "+0;
    document.getElementById("J2-score").innerHTML = "Score = "+0;
    document.getElementById("J1-img").src="../img/default.jpg"
    document.getElementById("J2-img").src="../img/default.jpg"
    jugador1 = -1;
    jugador2 = -1;
    default_cont = 10;
    finalizarJuego = true;
}
document.getElementById("btn-finalizar").onclick = finalizar;
