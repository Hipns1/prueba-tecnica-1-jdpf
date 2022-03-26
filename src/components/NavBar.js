import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav>
          <Link className="link" to="/productos">Productos</Link>
          <Link className="link" to="/">CRUD</Link>
        </nav>
      <hr />
    </div>
  )
}

export default NavBar;