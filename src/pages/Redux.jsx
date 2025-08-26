import React from "react";
import { useDispatch, useSelector } from "react-redux";
import redux from "../Assets/redux.png";

const initialState = { theme: "claro" };

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "claro" ? "oscuro" : "claro" };
    default:
      return state;
  }
}

const Redux = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1 caja */}
      <div className="Redux">
        <h2>Redux en React</h2>
        <p>
          Redux es una biblioteca para el manejo del estado en aplicaciones
          JavaScript, especialmente en aquellas construidas con React.
          Proporciona un contenedor predecible para el estado de la
          aplicación, lo que facilita su gestión y depuración.
        </p>
        <p>Redux se basa en tres principios fundamentales:</p>
        <ul>
          <li>
            <strong>Un solo estado global:</strong> Todo el estado de la
            aplicación se almacena en un único objeto.
          </li>
          <li>
            <strong>Estado de solo lectura:</strong> La única forma de cambiar
            el estado es emitir una acción.
          </li>
          <li>
            <strong>Funciones puras:</strong> Las actualizaciones de estado se
            realizan mediante funciones puras llamadas reductores.
          </li>
        </ul>
      </div>

      {/* 2 caja */}
      <div className="Redux">
        <img src={redux} alt="Logo de Redux" />
      </div>

      {/* 3 caja mejorada visual */}
      <div className={`Redux ${theme === "oscuro" ? "dark" : ""}`}>
        <h2>Ejemplo Interactivo: Tema con Redux</h2>
        <label>
          Pulsa el botón para alternar entre <b>tema claro</b> y <b>tema oscuro</b>.
        </label>
        <p>
          Tema actual: <strong>{theme}</strong>
        </p>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          Cambiar Tema
        </button>
      </div>
    </div>
  );
};

export default Redux;
