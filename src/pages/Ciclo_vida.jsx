import { useState } from "react";
import Ciclo_vida from "../Assets/ciclo-vida.png";

const Ciclo_vida = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [resultado, setResultado] = useState("");

    const mostrarResultado = () => {
        if (nombre && edad) {
            setResultado(`Hola, ${nombre} tienes ${edad} años. Bienvenido al ciclo de vida de React`);
        } else {
            setResultado("⚠️ Por favor completa ambos campos.");
        }
    };

    return (
        <div>
            {/* 1 caja */}
            <div className="ciclo_vida">
                <h2>Ciclo de Vida de un Componente en React</h2>
                <p>
                    El ciclo de vida de un componente en React describe las diferentes fases por las que pasa un 
                    componente desde que se monta en el DOM, se actualiza cuando cambian sus estados o props, 
                    hasta que se desmonta. Estas fases permiten ejecutar código en momentos específicos para 
                    controlar el comportamiento de la aplicación.
                </p>  
            </div>

            {/* 2 caja */}
            <div className="ciclo_vida">
                <img src={Ciclo_vida} alt="Ciclo de Vida de un Componente en React" />
            </div>

            {/* 3 caja */}
            <div className="ciclo_vida">
                <h2>Ejemplo Interactivo</h2>
                <label>Introduce tu nombre y tu edad, y revisa cómo React renderiza los datos:</label>
                <br />
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Ingresa tu edad" 
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
                <button onClick={mostrarResultado}>Mostrar resultado</button>

                {/* Mostrar resultado */}
                {resultado && (
                    <p style={{ marginTop: "10px", fontSize: "20px" }}>{resultado}</p>
                )}
            </div>
        </div>
    );
};

export default Ciclo_vida;
