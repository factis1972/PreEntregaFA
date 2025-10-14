import { useState } from "react";

const Formulario = () => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const manejarEnvio = (evento) =>{
        evento.preventDefault();
        alert(`Enviaste el formulario: ${nombre}, ${apellido}`);
    }

    return (
        <form onSubmit={manejarEnvio}>
            <input
                value={nombre}
                type="text"
                onChange={evento=>setNombre(evento.target.value)}
            />
            <input
                value={apellido}
                type="text"
                onChange={evento=>setApellido(evento.target.value)}
            />
            <button type="submit">
                Enviar
            </button>
        </form>
    );
}
export default Formulario;