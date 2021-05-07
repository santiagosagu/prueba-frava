import React, { useState } from 'react'
import UsuarioSeleccionadoContext from './UsuarioSeleccionadoContext'

const UsuarioState = (props) => {

    const [persona, setPersona] = useState({})

    const [verTarjeta, setVerTarjeta] = useState(false)

    const mostrarUsuario = persona => {
        setPersona(persona)
        setVerTarjeta(true)
    }

    return (
        <UsuarioSeleccionadoContext.Provider
            value={{
                persona,
                verTarjeta,
                mostrarUsuario
            }}
        >
            {props.children}
        </UsuarioSeleccionadoContext.Provider>
    )
}

export default UsuarioState
