const utileriasResultado = () => {
    function calcularResultado(jugador, computadora) {
      
        console.log("Jugador: ", jugador, ", Computadora: ", computadora);

        if (jugador == computadora) {
          return "Empate";
        } else if (
          (jugador == 0 && computadora == 2) ||
          (jugador == 1 && computadora == 0) ||
          (jugador == 2 && computadora == 1)
        ) {
          return "¡GANASTE!";
        } else {
          return "Perdiste :(";
        }
      }
      return { calcularResultado }
}

export default utileriasResultado;