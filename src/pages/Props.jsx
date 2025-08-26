import React, { useState } from 'react';

const ComponenteHijo = ({ nombre, edad }) => {
  return (
    <div className="card">
      <h3>Hola, {nombre}!</h3>
      <p>Tienes {edad} años.</p>
    </div>
  );
};

const Props = () => {
  // 👉 Estados y función para la caja 4
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [personas, setPersonas] = useState([]);

  const handleAgregar = () => {
    if (nombre.trim() !== "" && edad.trim() !== "") {
      setPersonas([...personas, { nombre, edad }]);
      setNombre("");
      setEdad("");
    }
  };

  return (
    <div>
      {/* Caja 1: props en react */}
      <div className="props">
        <h2>Props en React</h2>
        <br />
        <p>
          Los props en React son como “puentes de información” que conectan un componente con otro.
          Sirven para que un componente pueda recibir datos desde afuera, en lugar de tener todo
          escrito de manera fija.
        </p>
        <br />
        <br />
        <p>
          Gracias a los props, los componentes en React se vuelven reutilizables y flexibles.
          No necesitas crear un nuevo componente para cada caso; simplemente cambias los datos que le
          envías, y el mismo componente mostrará cosas distintas.
        </p>
        <br />
        <br />
        <p>
          Otra cosa importante de los props es que son de solo lectura, es decir, el componente que los
          recibe no puede cambiarlos directamente. Esto asegura que la información fluya en una sola
          dirección, desde el componente “padre” hacia el “hijo”, lo que ayuda a mantener las aplicaciones
          más claras y organizadas.
        </p>
        <br />
        <br />
        <p>
          En resumen, los props son una forma de personalizar y dar vida a los componentes.
          Permiten que las aplicaciones sean más ordenadas, fáciles de mantener y rápidas de construir.
        </p>
      </div>
      <br />
      <br />
      <br />

      {/* Caja 2: imagen props */}
      <div className="props">
        <img src="/public/props.jpg" alt="Props en React" />
      </div>

      {/* Caja 3: resultado fijo */}
      <div className="resultado">
        <h2>Resultado en vivo:</h2>
        <div className="cards-container">
          <ComponenteHijo nombre="santiago" edad={18} />
          <ComponenteHijo nombre="eliana" edad={35} />
          <ComponenteHijo nombre="carlos" edad={28} />
        </div>

        <div className="parrafo-resultado">
          <p>
            Como puedes ver, el componente padre Props pasa las props nombre y edad a cada ComponenteHijo,
            que las utiliza para mostrar mensajes personalizados.
          </p>
        </div>
      </div>

      <br />
      <br />

      {/* Caja 4: Bloque de ejemplo interactivo */}
      <div className="ejemplo-props">
        <h2>Ejemplo Interactivo con Props</h2>
        <br />
        <p>Escribe un nombre y una edad para enviar datos al componente hijo:</p>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="button" onClick={handleAgregar}>
          Agregar
        </button>

        {/* Resultado en vivo dinámico */}
        <div className="resultado">
          <h3>Resultado en vivo</h3>
          <div className="cards-container">
            {personas.map((p, index) => (
              <ComponenteHijo key={index} nombre={p.nombre} edad={p.edad} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Props;
