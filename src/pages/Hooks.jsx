import { useState } from "react";

const Hooks = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  // Estados para la calculadora de compras
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [total, setTotal] = useState(null);
  const [mensaje, setMensaje] = useState("");

  // Calculadora simple
  const calcular = () => {
    if (num1.trim() === "" || num2.trim() === "") {
      setError("⚠️ Por favor ingrese números válidos.");
      setResultado(null);
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError("⚠️ Por favor ingrese solo números.");
      setResultado(null);
      return;
    }

    setResultado(n1 + n2);
    setError("");
  };

  const limpiar = () => {
    setNum1("");
    setNum2("");
    setResultado(null);
    setError("");
  };

  // Calculadora de Compras con validaciones
  const calcularCompra = () => {
    if (!producto.trim() || !precio.trim() || !cantidad.trim()) {
      setMensaje("⚠️ Por favor complete todos los campos.");
      setTotal(null);
      return;
    }

    const p = parseFloat(precio);
    const c = parseInt(cantidad);

    if (isNaN(p) || isNaN(c) || p <= 0 || c <= 0) {
      setMensaje("⚠️ Ingrese valores numéricos válidos (mayores a 0).");
      setTotal(null);
      return;
    }

    setTotal(p * c);
    setMensaje("");
  };

  const limpiarCompra = () => {
    setProducto("");
    setPrecio("");
    setCantidad("");
    setTotal(null);
    setMensaje("");
  };

  return (
    <div>
      {/* Caja 1 */}
      <div className="Hooks">
        <h2>React con Hooks</h2>
        <p>
          Los Hooks en React son funciones que permiten usar estado y otras
          características de React en componentes funcionales. Antes de su
          llegada en la versión 16.8, estas funcionalidades solo podían usarse
          en componentes de clase.
        </p>
        <h3>Tipos de hooks:</h3>
        <ul>
          <li><strong>useState:</strong> Permite agregar estado a componentes funcionales.</li>
          <li><strong>useEffect:</strong> Maneja efectos secundarios.</li>
          <li><strong>useContext:</strong> Acceso a datos globales sin props.</li>
          <li><strong>useRef:</strong> Acceder al DOM o mantener valores persistentes.</li>
          <li><strong>useReducer:</strong> Para estados complejos.</li>
        </ul>
      </div>

      {/* Caja 2 */}
      <div className="Hooks">
        <h2>Calculadora con Hooks</h2>
        <input
          type="text"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={calcular}>Calcular</button>
        <button onClick={limpiar}>Limpiar</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {resultado !== null && <p style={{ color: "blue" }}>Resultado: {resultado}</p>}
      </div>

      {/* Caja 3 */}
      <div className="Hooks">
        <h2>Calculadora de Compras con Hooks</h2>
        <label>Calcula el total usando useState para manejar el estado</label>
        <input
          type="text"
          placeholder="Producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <button onClick={calcularCompra}>Calcular</button>
        <button onClick={limpiarCompra}>Limpiar</button>

        {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
        {total !== null && (
          <p style={{ color: "blue" }}>
            Total a pagar por <strong>{producto}</strong>: ${total}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hooks;
