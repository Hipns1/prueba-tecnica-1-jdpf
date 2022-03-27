import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FileUpload } from '../helpers/FileUpload';
import { url } from '../helpers/Url';
import { DivForm, InputElegir } from '../styles/Styles';
import uploadImg from "../styles/images/upload.png";

const FormularioProducto = () => {


  const [agregar, setAgregar] = useState({
    imagen: "",
    nombre: "",
    precio: ""
  })
  const handleChanged = ({ target }) => {
    setAgregar({
      ...agregar,
      [target.name]: target.value
    })
  }

  const agregarGame = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(agregar),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgregar({
      imagen: "",
      nombre: "",
      precio: ""
    })
  }

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    /* Swal.fire('Espere mientras carga la imagen') */

    Swal.fire({
      title: 'Cargando',
      text: "Espere mientras carga la imagen",
      icon: 'warning',
      showCancelButton: false,
      showConfirmButton: false,
    })
    FileUpload(file)
      .then(resp => {
        agregar.imagen = resp;

        Swal.fire({
          icon: 'success',
          title: 'Bien!',
          text: 'Imagen cargada correctamente'
        })
      }).catch(error => {
        console.log(error)
      })
  }

  const { imagen, nombre, precio } = agregar;
  return (
    <DivForm className='formData'>
      <form onSubmit={handleSubmit}>
        <input type="texto" name="nombre" placeholder="Ingrese el nombre"
          onChange={handleChanged} value={nombre} />
        <input type="texto" name="precio" placeholder="Ingrese el precio"
          onChange={handleChanged} value={precio} />
        <label><img src={uploadImg} alt=""/>Upload image<InputElegir type="file" name="imagen"
          onChange={handleFileChanged} value={imagen} /></label>
        <button onClick={agregarGame}>Enviar</button>
      </form>

    </DivForm>
  )
}

export default FormularioProducto;