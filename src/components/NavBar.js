import React from 'react';
import { Link } from "react-router-dom";
import { ImgPs, NavBarContainer, NavBarStyled } from '../styles/Styles';
import psImg from "../styles/images/ps.png"

const NavBar = () => {
  return (
    <NavBarContainer>
        <NavBarStyled>
          <Link className="link" to="/"><ImgPs src={psImg}></ImgPs></Link>
          <Link className="link" to="/productos">Productos</Link>
          <Link className="link" to="/formulario">CRUD</Link>
        </NavBarStyled>
    </NavBarContainer>
  )
}

export default NavBar;