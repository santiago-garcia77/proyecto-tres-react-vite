import node from '../Assets/node.png';
import react from '../Assets/react.jpg';

const Inicio = () => {
    return(
    <div>
         {/* Caja 1: ¿Qué es React? */}
        <div className="inicio">
            <h2>¿Que es React?</h2>
            <br />
            <br />
            <p>React es una biblioteca de JavaScript creada por Facebook que se utiliza para desarrollar 
                interfaces de usuario interactivas en aplicaciones web y móviles. Su principal objetivo es 
                facilitar la construcción de interfaces de una forma más rápida, ordenada y eficiente.</p>
                <br />
            <p>Una de las características más importantes de React es el uso de componentes reutilizables. 
                Un componente es como una pieza de la interfaz que puede usarse en diferentes partes de la 
                aplicación, lo que permite ahorrar tiempo, mantener el código más limpio y facilitar su 
                mantenimiento.</p>
                <br />
            <p>Otro aspecto fundamental de React es el DOM Virtual. En lugar de actualizar toda la página cada
                 vez que ocurre un cambio, React crea una copia virtual del DOM (la estructura de la página) 
                 y actualiza solo las partes que realmente cambiaron. Esto hace que las aplicaciones sean más 
                 rápidas y con un mejor rendimiento.</p>
            <img src={react} alt="logo de react" />
            <br />
            <br />
            <br />
            <p>En resumen, React es una herramienta muy popular en el desarrollo moderno porque permite crear 
                aplicaciones web dinámicas, rápidas y fáciles de mantener, convirtiéndose en una de las tecnologías 
                más utilizadas por desarrolladores en todo el mundo.</p>
        </div>    

        <br />
        <br />

              {/* Caja 2: ¿Por qué usar React? */}
            <div className="inicio">
                <h2>¿Por que usar React?</h2>
                <p>React es una excelente opción para el desarrollo de aplicaciones web por varias razones:</p>
                <br />
                <ul>
                    <li><strong>Facilidad para crear interfaces modernas:</strong> React permite construir 
                    interfaces de usuario de forma sencilla, dividiéndolas en componentes reutilizables.</li>
                    <br />
                    <li><strong>Componentes reutilizables:</strong> Permite crear componentes que se pueden 
                    reutilizar en diferentes partes de la aplicación.</li>
                    <br />
                    <li><strong>Alto rendimiento con el Virtual DOM:</strong> Gracias al DOM Virtual, React 
                    actualiza solo las partes necesarias, mejorando el rendimiento.</li>
                    <br />
                    <li><strong>Comunidad y ecosistema:</strong> Tiene una gran comunidad y un ecosistema rico en bibliotecas 
                    y herramientas.</li>
                </ul>
            </div>
            <br />
            <br />


            {/* Caja 3: ¿Qué herramienta Necesito para Iniciar con React? */}
            <div className="inicio">
                <br />
                <h2>¿Qué herramienta Necesito para Iniciar con React?</h2>
                <br />
                <br />
            <p>Puedes comenzar con React utilizando herramientas como Create React App, que configura 
                automáticamente un entorno de desarrollo para ti. También necesitarás tener Node.js y npm 
                instalados en tu máquina.</p>
                <br />
            <ul>
                <li><strong>Node.js:</strong> Te permite ejecutar JavaScript en tu computadora y 
                manejar dependencias de React.</li>
                <br />
                <li><strong>Npm:</strong> Son los gestores que sirven para instalar y manejar las librerías 
                que React necesita.</li>
                <br />
                <li><strong>Visual Studio Code:</strong> Es el editor donde escribes tu código de React 
                de manera más organizada y cómoda.</li>
            </ul>

                <img src={node} alt="logo de node js" />

            </div>

            <br />
            <br />
            

            {/* Caja 4: ¿como puedo aprender React? */}
            <div className="inicio">
                <h2>¿Como puedo aprender React?</h2>
                <br />
            <p>Existen numerosos recursos para aprender React, incluyendo la documentación oficial, 
                tutoriales en línea, cursos y libros. Aquí hay algunas recomendaciones:</p>
                    <br />
                <ul>
                    <li><strong>Documentacion oficial:</strong> La documentación oficial de React es un 
                    excelente punto de partida para aprender sobre sus características y conceptos.</li>
                    <br />
                    <li><strong>Tutoriales en Línea:</strong> Hay muchos tutoriales en línea gratuitos y de 
                    pago que te guiarán a través de proyectos prácticos.</li>
                    <br />
                    <li><strong>Cursos:</strong> Plataformas como Udemy, Coursera y edX ofrecen cursos 
                    completos sobre React.</li>
                    <br />
                    <li><strong>Libros:</strong> Existen varios libros sobre React que cubren desde lo básico hasta 
                    temas avanzados.</li>
                </ul>
                
            </div>
    </div>
    )
}
export default Inicio;