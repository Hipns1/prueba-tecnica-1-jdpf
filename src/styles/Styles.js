import styled from "styled-components";

//Estilos NavBar
export const NavBarContainer = styled.div`
    background-color: #341479;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:310px) {
        height: 150px;
    }
`
export const NavBarStyled = styled.nav`
    display: flex;
    width: 100%;
    justify-content:space-between;
    align-items: center;
    @media (max-width:600px) {
        justify-content:space-around;
    }
    @media (max-width:500px) {
        flex-wrap: wrap;
    }
    a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 100px;
        font-weight: bold;
        transition: 0.3s all ease;
        :hover{
            transform: scale(1.05);
        }
        @media (max-width:600px) {
            margin-right: 0;
        }
    }
    
`
export const ImgPs = styled.img`
    height: 90px;
    margin-left: 40px;
    @media (max-width:600px) {
        margin-left: 0px;
        height: 70px;
        }
`

//Estilo de pagina de bienvenida
export const DivBienvenida = styled.div`
    background-image: url(https://images7.alphacoders.com/109/1090776.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 94vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DivText = styled.div`
    background: rgba(255, 255, 255, 0.30);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 4px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    @media (max-width:750px) {
        width: 90%;
    }
    h1{
        color:#341479;
        font-size: 50px;
        text-transform: uppercase;
        @media (max-width:750px) {
            font-size: 30px;
        }
    }
    button{
        background-color: #341479;
        color: white;
        border: none;
        height: 40px;
        width: 200px;
        font-size: 20px;
        margin-top: 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s all ease;
        :hover{
            background-color: transparent;
            color:#341479;
            border: 2px solid #341479;
            font-weight: bold;
        }
    }
`



//Estilos de CARDS
export const DivContainer = styled.div`
    background-color: #4618AC;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 570px;
    width: 250px;
    margin: 40px 40px;
    border-radius: 5px;
    background-color: #260f58;

    img{
    width:100%;
    height:350px;
    object-fit: cover;
    }
    h1{
        margin-top: 5px;
        font-size: 15px;
        color: white;
        margin-top: 10px;
        margin-left: 15px;
    }
    h2{
        font-size: 15px;
        color: #00CF9F;
        margin-top: 10px;
        margin-left: 15px;
    }
    h3{
        color: white;
        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 15px;
    }
`

export const ButtonEliminar = styled.button`
    width: 90%;
    margin: auto;
    margin-top: 10px;
    border: none;
    border-radius: 2px;
    color: white;
    background-color: #C70039;
    height: 40px;
    text-transform: uppercase;
    font-size: 15px;
    cursor:pointer;
    transition: 0.3s all ease;
    :hover{
        transform: scale(1.02);
        background-color: transparent;
        border: 2px solid white;
        color: white;
    }
`
export const ButtonDetalle = styled.button`
    width: 90%;
    margin: auto;
    margin-top: 10px;
    border: none;
    border-radius: 2px;
    color: white;
    background-color: #00CF9F;
    height: 40px;
    text-transform: uppercase;
    font-size: 15px;
    cursor:pointer;
    transition: 0.3s all ease;
    :hover{
        transform: scale(1.02);
        background-color: transparent;
        border: 2px solid white;
        color: white;
    }
`

//Estilos deL CRUD

export const DivForm = styled.div`
    width: 100%;
    height: 94vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-image: url(https://images7.alphacoders.com/109/1090776.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    form{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:40px;
        background: rgba(255, 255, 255, 0.30);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        border-radius: 4px;
        width: 400px;
    }
    input{
        height: 40px;
        width: 100%;
        margin-top: 20px;
        border-radius: 2px;
        border: none;
    }
    label{
        background-color: #341479;
        height: 40px;
        width: 100%;
        color: white;
        margin-top: 20px;
        border-radius: 2px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-size: 13px;
        transition: 0.3s all ease;
        :hover{
            border: 2px solid white;
            background-color: transparent;
            color:white;
            transform: scale(1.01);
        }
        img{
            height: 20px;
        } 
    }
    button{
        margin-top:20px ;
        background-color: #00CF9F;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 2px;
        text-transform: uppercase;
        color: white;
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s all ease;
        :hover{
            border: 2px solid white;
            background-color: transparent;
            color:white;
            transform: scale(1.01);
        }
    }
`
export const InputElegir = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`