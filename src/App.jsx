import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Componentes/Layout'
import Inicio  from './pages/Inicio';
import Props from './pages/Props';
import Estados from './pages/Estados';
import Ciclo_vida from './pages/Ciclo_vida';
import Hooks from './pages/Hooks';
import Virtual_dom from './pages/Virtual_dom';
import Redux from './pages/Redux';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/props" element={<Props />} />
        <Route path="/estados" element={<Estados />} />
        <Route path="/ciclo_vida" element={<Ciclo_vida />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/virtual_dom" element={<Virtual_dom />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </Layout>
  );
};

export default App;
