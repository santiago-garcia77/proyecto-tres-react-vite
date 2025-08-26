import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">💻Inicio</Link></li>
                <li><Link to="/Props">ℹ️Props</Link></li>
                <li><Link to="/Estados">🧬Estados</Link></li>
                <li><Link to="/Ciclo_vida">♾️Ciclo de vida de un componente</Link></li>
                <li><Link to="/Hooks">💎Hooks</Link></li>
                <li><Link to="/Virtual_Dom">🌐Virtual Dom</Link></li>
                <li><Link to="/Redux">🔄Redux</Link></li>
            </ul>
        </nav>
    )
}
export default Menu;