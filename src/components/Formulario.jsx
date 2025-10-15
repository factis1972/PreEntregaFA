import { useState } from "react";
import Style from './Formulario.module.css';


const Formulario = () => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const manejarEnvio = (evento) =>{
        evento.preventDefault();
        alert(`Enviaste el formulario: ${nombre}, ${apellido}`);
    }

    return (
        <div className={Style.formulario}>
            <form onSubmit={manejarEnvio}>
                <label className={Style.etiqueta} htmlFor="nombre">Nombre</label>
                <input className={Style.campos}
                    value={nombre}
                    type="text"
                    onChange={evento=>setNombre(evento.target.value)}
                    id="nombre"
                />
                <label className={Style.etiqueta} htmlFor="apellido">Apellido</label>
                <input className={Style.campos}
                    value={apellido}
                    type="text"
                    onChange={evento=>setApellido(evento.target.value)}
                    id="apellido"
                />
                <label className={Style.etiqueta} htmlFor="email">E-mail</label>
                <input className={Style.campos}
                    value={apellido}
                    type="email"
                    onChange={evento=>setApellido(evento.target.value)}
                    id="email"
                />
                <button className={Style.btnEnviar} type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}
export default Formulario;