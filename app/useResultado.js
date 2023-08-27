import {useState}  from 'react';
import utileriasResultado from './utileriasResultado';

const useResultado = () => {
    const [jugador, setJugador] = useState('');
    const [eleccionJugador, setEleccionJugador] = useState('');
    const [eleccionComputadora, setEleccionComputadora] = useState('');
    const [computadora, setComputadora] = useState('');
    const [resultado, setResultado] = useState('');
    const { calcularResultado } = utileriasResultado();
    
    function obtenerResultado() {
        setComputadora(Math.floor(Math.random() * 3));
        if(computadora == 0){
            setEleccionComputadora("Piedra")
        }
        else if(computadora == 1){
            setEleccionComputadora("Papel")
        } else{
            setEleccionComputadora("Tijeras")
        };
        var resultadoPPT = calcularResultado(jugador, computadora);
        setResultado(resultadoPPT);
    }

    return { jugador, setJugador, computadora, setComputadora, resultado, eleccionJugador, setEleccionJugador, eleccionComputadora, setEleccionComputadora, obtenerResultado }
}

export default useResultado;