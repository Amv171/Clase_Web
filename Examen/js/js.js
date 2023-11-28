//Declaracion de las variables
let contPartidas = 0;
let finalizarJuego = true;
let jugador1 = -1;
let jugador2 = -1;
let jugador3 = -1;
let jugador1_aviable = false;
let jugador2_aviable = false;
let jugador3_aviable = false;
let jugador1_score = 0;
let jugador2_score = 0;
let jugador3_score = 0;
let default_cont = 1;
//Funcion numero aleatorio

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
document.getElementById("2partidas").onclick = ()=>{default_cont = 2;document.getElementById("partidas-text").innerHTML = "Numero de partidas = "+default_cont}
document.getElementById("3partidas").onclick = ()=>{default_cont = 3;document.getElementById("partidas-text").innerHTML = "Numero de partidas = "+default_cont}
document.getElementById("4partidas").onclick = ()=>{default_cont = 4;document.getElementById("partidas-text").innerHTML = "Numero de partidas = "+default_cont}
document.getElementById("5partidas").onclick = ()=>{default_cont = 5;document.getElementById("partidas-text").innerHTML = "Numero de partidas = "+default_cont}
//Funcion para jugar
const play = (jugadores) =>{
    switch(jugadores){
        case 0: alert("No hay Humanos");
        finalizarJuego = false;
        jugador1_aviable = false;
        jugador2_aviable = false;
        jugador3_aviable = false;
        enseñarHumanos();
        document.getElementById("btn-juego").onclick = ()=>{
            jugador1 = getRandomInt(2); 
            if(jugador1 ===1){
                document.getElementById("J1-img").src="../img/uno.png";
            }else{document.getElementById("J1-img").src="../img/dos.png";}
            jugador2 = getRandomInt(2); 
            if(jugador2 ===1){
                document.getElementById("J2-img").src="../img/uno.png";
            }else{document.getElementById("J2-img").src="../img/dos.png";}
            jugador3 = getRandomInt(2);
            if(jugador3 ===1){
                document.getElementById("J3-img").src="../img/uno.png";
            }else{document.getElementById("J3-img").src="../img/dos.png";}
            setTimeout(() => {            
            ganador(jugador1,jugador2,jugador3);
            jugador1 = -1;
            jugador2 = -1;
            jugador3 = -1;
            document.getElementById("J1-img").src="../img/cero.png"
            document.getElementById("J2-img").src="../img/cero.png"
            document.getElementById("J3-img").src="../img/cero.png"
            document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
            document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
            document.getElementById("J3-score").innerHTML = "Score = "+jugador3_score;
            }, 1000);
            if(contPartidas === default_cont){
                finalizar();
            }
        }
        
        break;
        case 1: alert("1 Humano");
        finalizarJuego = false;
        jugador1_aviable = true;
        jugador2_aviable = false;
        jugador3_aviable = false;
        enseñarHumanos();
        document.getElementById("btn-juego").onclick = ()=>{if(jugador1 !=-1){
            jugador2 = getRandomInt(2); 
            if(jugador2 ===1){
                document.getElementById("J2-img").src="../img/uno.png";
            }else{document.getElementById("J2-img").src="../img/dos.png";}
            jugador3 = getRandomInt(2);
            if(jugador3 ===1){
                document.getElementById("J3-img").src="../img/uno.png";
            }else{document.getElementById("J3-img").src="../img/dos.png";}
            setTimeout(() => {            
            ganador(jugador1,jugador2,jugador3);
            jugador1 = -1;
            jugador2 = -1;
            jugador3 = -1;
            document.getElementById("J1-img").src="../img/cero.png"
            document.getElementById("J2-img").src="../img/cero.png"
            document.getElementById("J3-img").src="../img/cero.png"
            document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
            document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
            document.getElementById("J3-score").innerHTML = "Score = "+jugador3_score;
            }, 1000);
            if(contPartidas === default_cont){
                finalizar();
            }
            
        }
            else{
                alert("Seleccione para todoslos jugadores");
            }
        }

        break;
        case 2: alert("2 Humanos");
        finalizarJuego = false;
        jugador1_aviable = true;
        jugador2_aviable = true;
        jugador3_aviable = false;
        enseñarHumanos();
        document.getElementById("btn-juego").onclick = ()=>{if(jugador1 !=-1 && jugador2 != -1){
            jugador3 = getRandomInt(2);
            document.getElementById("J3-img").src="../img/"+jugador3+".png";
            setTimeout(() => {            
                
            ganador(jugador1,jugador2,jugador3);
            jugador1 = -1;
            jugador2 = -1;
            jugador3 = -1;
            document.getElementById("J1-img").src="../img/cero.png"
            document.getElementById("J2-img").src="../img/cero.png"
            document.getElementById("J3-img").src="../img/cero.png"
            document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
            document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
            document.getElementById("J3-score").innerHTML = "Score = "+jugador3_score;
            }, 1000);
            if(contPartidas === default_cont){
                finalizar();
            }
            
        }
            else{
                alert("Seleccione para todoslos jugadores");
            }
        }
        break;
        case 3: alert("3 Humanos");
        finalizarJuego = false;
        jugador1_aviable = true;
        jugador2_aviable = true;
        jugador3_aviable = true;
        enseñarHumanos();
        document.getElementById("btn-juego").onclick = ()=>{if(jugador1 !=-1 && jugador2 != -1 && jugador3 != -1){
            ganador(jugador1,jugador2,jugador3);
            jugador1 = -1;
            jugador2 = -1;
            jugador3 = -1;
            document.getElementById("J1-img").src="../img/cero.png"
            document.getElementById("J2-img").src="../img/cero.png"
            document.getElementById("J3-img").src="../img/cero.png"
            document.getElementById("J1-score").innerHTML = "Score = "+jugador1_score;
            document.getElementById("J2-score").innerHTML = "Score = "+jugador2_score;
            document.getElementById("J3-score").innerHTML = "Score = "+jugador3_score;
            if(contPartidas === default_cont){
                finalizar();
            }
        }
            else{
                alert("Seleccione para todoslos jugadores");
            }
        }
        break;
    }
    document.getElementById("numero-humanos").className = "invisible";
    document.getElementById("numero-partidas").className = "invisible";
}
document.getElementById("J1-uno").onclick = ()=>{jugador1 = 1;document.getElementById("J1-img").src="../img/uno.png";};
document.getElementById("J1-dos").onclick = ()=>{jugador1 = 2;document.getElementById("J1-img").src="../img/dos.png";};
document.getElementById("J2-uno").onclick = ()=>{jugador2 = 1;document.getElementById("J2-img").src="../img/uno.png";};
document.getElementById("J2-dos").onclick = ()=>{jugador2 = 2;document.getElementById("J2-img").src="../img/dos.png";};
document.getElementById("J3-uno").onclick = ()=>{jugador3 = 1;document.getElementById("J3-img").src="../img/uno.png";};
document.getElementById("J3-dos").onclick = ()=>{jugador3 = 2;document.getElementById("J3-img").src="../img/dos.png";};


const enseñarHumanos = ()=>{
    document.getElementById("J1").className = jugador1_aviable ? "btn btn-secondary dropdown-toggle" : "invisible";
        document.getElementById("J2").className = jugador2_aviable ? "btn btn-secondary dropdown-toggle" : "invisible";
        document.getElementById("J3").className = jugador3_aviable ? "btn btn-secondary dropdown-toggle" : "invisible";
}


const ganador = (j1,j2,j3)=>{
    contPartidas++;
    if(j1 !=j2 && j1 !=j3){
        jugador1_score++;
    }
    else if(j2 !=j1 && j2 !=j3){
        jugador2_score++;
    }
    else if(j3 !=j1 && j3 !=j2){
        jugador3_score++;
    }
}


//Asignacon de eventos
document.getElementById("0Humano").onclick = ()=>play(0);
document.getElementById("1Humano").onclick = ()=>play(1);
document.getElementById("2Humano").onclick = ()=>play(2);
document.getElementById("3Humano").onclick = ()=>play(3);

//Funcion Finalizar
const finalizar = ()=>{
    if(finalizarJuego === false){
        if(jugador1_score>jugador2_score && jugador1_score>jugador3_score){
            alert("Fin del juego. Gana el jugador 1");
        }
        else if(jugador1_score<jugador2_score && jugador2_score>jugador3_score){
            alert("Fin del juego. Gana el jugador 2");
        }
        else if(jugador3_score>jugador2_score && jugador1_score<jugador3_score){
            alert("Fin del juego. Gana el jugador 3");
        }
        else{
            alert("Fin del juego. No hay ganador");
        }
        document.getElementById("numero-humanos").className = "dropdown";
        document.getElementById("numero-partidas").className = "dropdown"
        document.getElementById("J1").className = "invisible";
        document.getElementById("J2").className = "invisible";
        document.getElementById("J3").className = "invisible";
        document.getElementById("J1-score").innerHTML = "Score = "+0;
        document.getElementById("J2-score").innerHTML = "Score = "+0;
        document.getElementById("J3-score").innerHTML = "Score = "+0;
        document.getElementById("J1-img").src="../img/cero.png"
        document.getElementById("J2-img").src="../img/cero.png"
        document.getElementById("J3-img").src="../img/cero.png"
        jugador1 = -1;
        jugador2 = -1;
        jugador3 = -1;
        jugador1_score = 0;
        jugador2_score = 0;
        jugador3_score = 0;
        default_cont = 1;
        contPartidas = 0;
        document.getElementById("partidas-text").innerHTML = "Numero de partidas = "+default_cont;
        finalizarJuego = true;}
}
document.getElementById("btn-finalizar").onclick = finalizar;






