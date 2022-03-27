import React from 'react'
import { Link } from 'react-router-dom';
import { DivBienvenida, DivText } from '../styles/Styles';

const Bienvenido = () => {
  return (
    <DivBienvenida>
      <DivText>
        <h1>Bienvenido!</h1>
        <Link className="link" to="/productos"><button>Ver productos</button></Link>
      </DivText>
    </DivBienvenida>
  )
}

export default Bienvenido;