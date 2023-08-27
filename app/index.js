import React from 'react';
import { Stack, Button, Text } from "@react-native-material/core";
import useResultado from './useResultado';

const Home = () => {
    const { eleccionComputadora, setJugador, eleccionJugador, setEleccionJugador, resultado, obtenerResultado } = useResultado('');


    return (
        <Stack spacing={5} style={{ margin: 16 }}  >
            <Text variant="h4" style={{ marginTop: 16, marginBottom: 30, marginVertical: 50}}>
                Piedra, Papel o Tijeras
            </Text>
            <Button title="Piedra" color="#B8B29F" tintColor="#7B6525" onTouchEnd={() =>{
                setJugador(0);
                setEleccionJugador("Piedra");
            }}>
            </Button>
            <Button title="Papel" color="#A5EEF3" tintColor="#0DAFE7" onTouchEnd={() =>{
                setJugador(1);
                setEleccionJugador("Papel");
            }}/>
            <Button title="Tijeras" color="#B5EE95" tintColor="#60BB06" onTouchEnd={() =>{
                setJugador(2);
                setEleccionJugador("Tijeras");
            }}/>
            <Text style={{ margin: 16 }}>
                Seleccionaste: {eleccionJugador}
            </Text>
            <Text style={{ margin: 16, marginBottom: 20}}>
                Computadora: {eleccionComputadora}
            </Text>
            <Button title="Jugar" color="#FF9E00" tintColor="#FFFFFF" onTouchEnd={obtenerResultado}/>
            <Text style={{ margin: 16 }}>
                Resultado: {resultado}
            </Text>
        </Stack>
        
    )
}
export default Home;