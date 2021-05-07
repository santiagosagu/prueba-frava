import React, { useContext } from 'react'
import Form from '../components/Form'
import Styled from '@emotion/styled'
import Tabla from '../components/Tabla'
import Usuario from '../components/Usuario'
import UsuarioSeleccionadoContext from '../context/usuarioSeleccionado/UsuarioSeleccionadoContext'

const Contenedor = Styled.div`
    @media(min-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`

const Home = () => {

    const { verTarjeta } = useContext(UsuarioSeleccionadoContext)

    return (
        <Contenedor>
            <Form />
            <Tabla />
            {verTarjeta &&
                <Usuario />
            }


        </Contenedor>
    )
}

export default Home
