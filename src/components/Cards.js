import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { url } from '../helpers/Url';


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
            text: `$ ${precio}`,
            imageUrl: `${imagen}`,
            imageHeight: 400
        })
    }



    return (
        <div>
            {
                data.map(game => (
                    <div key={game.id}>
                        <img src={game.imagen}></img>
                        <h1>{game.nombre}</h1>
                        <h2>$ {game.precio}</h2>
                        <button onClick={() => btnEliminar(game.id)}>Eliminar</button>
                        <button
                            onClick={() => btnDetalle(game.nombre, game.precio, game.imagen)}
                        >Detalle
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards;