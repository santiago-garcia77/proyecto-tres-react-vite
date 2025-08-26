import { useState } from "react";
import virtualdom from "../assets/virtualdom.png";

const Virtual_dom = () => {
  // Estado para el contador
  const [contador, setContador] = useState(0);

  return (
    <div>
      {/* 1 caja */}
      <div className="virtual_dom">
        <h2>Virtual DOM en React</h2>
        <p>
          El Virtual DOM es una representación en memoria del DOM real. React
          utiliza el Virtual DOM para optimizar las actualizaciones de la
          interfaz de usuario. Cuando el estado de un componente cambia, React
          crea un nuevo Virtual DOM y lo compara con el anterior utilizando un
          algoritmo de reconciliación. Solo se actualizan los elementos que han
          cambiado, lo que mejora el rendimiento y la eficiencia de la
          aplicación.
        </p>
      </div>

      {/* 2 caja */}
      <div className="virtual_dom">
        <img src={virtualdom} alt="Logo de Virtual DOM" />
      </div>

      {/* 3 caja */}
      <div className="virtual_dom">
        <h2>Ejemplo interactivo</h2>
        <label>
          Pulsa el botón y verás que solo se actualiza la cifra (React aprovecha
          el Virtual DOM para no recargar toda la página).
        </label>
        <p>
          Contador: <strong>{contador}</strong>
        </p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Virtual_dom;
