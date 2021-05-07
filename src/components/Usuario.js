import React, { useContext } from 'react'
import UsuarioSeleccionadoContext from '../context/usuarioSeleccionado/UsuarioSeleccionadoContext'
import Styled from '@emotion/styled'
import imagenUsuario from '../imagenes/user.png'

const Comtenido = Styled.div`
    
    background-color: #fff;
    margin-bottom: 3rem;
    text-align: center;
    padding: 2rem 1rem;
    border-radius: 1rem;
    box-shadow:0px 2px 20px 1px #8c8c8c;
    -moz-box-shadow:0px 2px 20px 1px #8c8c8c;
    -webkit-box-shadow:0px 2px 20px 1px #8c8c8c;
    padding: 1rem;

    @media(min-width: 769px){
        width: 400px;
    }

    ul{ 
        padding: 0;
        list-style: none;
        margin: 1rem;
    }

    li{
        font-size: 1.3rem;
    }

    img{
        width: 5rem;
    }
`

const Usuario = () => {

    const { persona } = useContext(UsuarioSeleccionadoContext)

    console.log(persona)

    const fecha = new Date(persona.fechaNacimiento)

    const ano = new Date().getFullYear() - fecha.getFullYear()

    return (
        <>
            {persona &&
                <>
                    <Comtenido>
                        <ul>
                            <img src={imagenUsuario} alt="" />
                            <li>{persona.nombre}</li>
                            <li>{persona.apellidos}</li>
                            <li>Edad: {ano}</li>
                            <li>Sexo: {persona.sexo}</li>
                            <li>Estatura: {persona.estatura}</li>
                            <li>Colombiano: {persona.colombiano === true ? 'Si' : 'No'}</li>
                        </ul>
                    </Comtenido>
                </>

            }
        </>
    )
}

export default Usuario
