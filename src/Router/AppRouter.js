import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import Bienvenido from '../components/Bienvenido';
import Cards from '../components/Cards';
import FormularioProducto from '../components/FormularioProducto';
import NavBar from '../components/NavBar';



function AppRouter() {
  return (
    <div>
      <Router>
            <NavBar/> 
                <Routes>
                    <Route path="/" element={<Bienvenido/>}/>
                    <Route path="/productos" element={<Cards/>}/>
                    <Route path="/formulario" element={<FormularioProducto/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default AppRouter;
