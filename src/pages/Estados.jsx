import React, { useState } from 'react';

const Estados = () => {
  // Estado para el ejemplo de la caja 3
  const [contador, setContador] = useState(0);

  return (
    <div>
      {/* 1 caja */}
      <div className="estados">
        <h2>Estados (State) en React</h2>
        <p>
          En React, el estado <strong>(state)</strong> es un objeto que permite a los componentes almacenar información que 
          puede cambiar a lo largo del tiempo. Esta información define cómo se debe renderizar el 
          componente en un momento dado y puede afectar su apariencia o comportamiento.
        </p>
        <p>
          A diferencia de las props, que son datos que un componente recibe de su componente padre y no pueden 
          modificarse directamente, el state es mutable desde dentro del componente. Esto permite que la interfaz de 
          usuario se actualice dinámicamente cuando los datos cambian.
        </p>
        <p>
          El state se utiliza principalmente para manejar datos que cambian por interacción del usuario, 
          como el valor de un formulario, el conteo de un contador, o si un elemento debe mostrarse u 
          ocultarse. Cada vez que se actualiza el state mediante funciones como <strong>setState</strong> o el hook <strong>useState</strong>, 
          React vuelve a renderizar automáticamente el componente afectado.
        </p>
      </div>

      <br />
      <br />
      <br />

      {/* 2 caja */}
      <div className="estados">
        <img src="/estados.jpg" alt="estados en react" />
      </div>

      <br />
      <br />

      {/* 3 caja */}
      <div className="estados">
        <h3>Ejemplo práctico de useState</h3>
        <p>Contador con botones para aumentar, disminuir y reiniciar:</p>
        <p>Valor actual: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Estados;



