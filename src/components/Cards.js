import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { url } from '../helpers/Url';
import { ButtonDetalle, ButtonEliminar, CardStyle, DivContainer } from '../styles/Styles';


const Cards = () => {

    const [data, setData] = useState([])

    const getApi = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setData(data)
    }
    useEffect(() => {
        getApi();
    }, [])

    const btnEliminar = async (id) => {
        await fetch(url + id, { method: "DELETE" })
        getApi();
    }

    const btnDetalle = async (nombre, precio, imagen) => {
        await Swal.fire({
            title: `${nombre}`,
            text: `USD ${precio}`,
            imageUrl: `${imagen}`,
            imageHeight: 400,
        })
    }

    return (
        <DivContainer>
            {
                data.map(game => (
                    <CardStyle key={game.id}>
                        <img src={game.imagen} alt=""></img>
                        <h1>{game.nombre}</h1>
                        <h2>Disponible</h2>
                        <h3>USD {game.precio}</h3>
                        <ButtonEliminar onClick={() => btnEliminar(game.id)}>Eliminar</ButtonEliminar>
                        <ButtonDetalle
                            onClick={() => btnDetalle(game.nombre, game.precio, game.imagen)}
                        >Detalle
                        </ButtonDetalle>
                    </CardStyle>
                ))
            }
        </DivContainer>
    )
}

export default Cards;