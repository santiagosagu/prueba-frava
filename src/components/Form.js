import React, { useState } from 'react'
import Styled from '@emotion/styled'
import UseFormValidaciones from '../hooks/UseFormValidaciones'

const Componente = Styled.div`

    h1{
        text-align: center;
    }
    
    .seccion-1{
        margin: 3rem 0 0 0;
        text-align: center;

        .apellidos{
            @media(min-width: 768px){
                width: 17rem;
            }
        }
    }

    .seccion-2{

        text-align: center;

        @media(min-width: 768px){
            margin: 3rem 0;
            text-align: start;
        }
    }

    input{
       
        padding: 0.5rem;
        border: none;
        border-bottom: 1px solid #131212;
        background-color: #fff;
        margin: 0.5rem 0;

        ::-webkit-input-placeholder { 
            color: #000;
        }

        @media(min-width: 768px){
            margin-right: 2rem;
        }
    }

    select{
        width: 60%;
        margin-right: 2rem;
        border: none;
        border-bottom: 1px solid #000;
        padding: 0.5rem;
        background-color: #fff;
        margin: 0.5rem 0;

        @media(min-width: 768px){
            width: auto;
            margin-right: 2rem;
        }

    }

    label{
        margin-top: 1rem;
        display: block;

        @media(min-width: 768px){
            margin-left: 1rem;
            margin-right: 1rem;
            display: inline-block;
        }
    }

    .contenedor-boton{
        margin-top: 1rem;
        display: flex;
        justify-content: center;

        @media(min-width: 768px){
            margin-top: 4rem;
            justify-content: flex-end;
        }


        button{
            padding: 0.2rem 2rem;
        }
    }
`

const Form = () => {

    const [formatoFecha, setFormatoFecha] = useState(false)

    //hooks
    const { datosPersona, setDatosPersona, guardarPersona } = UseFormValidaciones()

    const { nombre, apellidos, fechaNacimiento, sexo, estatura, colombiano} = datosPersona


    return (
        <Componente>
            <h1>Prueba Frava</h1>

            <form
                onSubmit={guardarPersona}
            >
                <div className='seccion-1'>
                    <input
                        type="text"
                        placeholder='Nombre'
                        name='nombre'
                        value={nombre}
                        onChange={e => setDatosPersona({ ...datosPersona, [e.target.name]: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder='Apellidos'
                        className='apellidos'
                        name='apellidos'
                        value={apellidos}
                        onChange={e => setDatosPersona({ ...datosPersona, [e.target.name]: e.target.value })}
                    />
                    <div
                        style={{ display: 'inline-block' }}
                        onFocus={() => setFormatoFecha(true)}
                        onBlur={() => setFormatoFecha(false)}
                    >
                        {formatoFecha
                            ? <input
                                type="date"
                                name='fechaNacimiento'
                                value={fechaNacimiento}
                                onChange={e => setDatosPersona({ ...datosPersona, [e.target.name]: e.target.value })}
                            />
                            : <input type="text" placeholder='Fecha de Nacimiento' value={fechaNacimiento}/>
                        }
                    </div>
                </div>

                <div className='seccion-2'>
                    <select name="sexo" value={sexo} onChange={e => setDatosPersona({ ...datosPersona, [e.target.name]: e.target.value })} >
                        <option value="">Sexo</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                    <input
                        type="number"
                        placeholder='Estatura'
                        name='estatura'
                        value={estatura}
                        step="any"
                        onChange={e => setDatosPersona({ ...datosPersona, [e.target.name]: e.target.value })}
                    />

                    <label>Colombiano?</label>
                    <input
                        type="checkbox"
                        name="colombiano"
                        checked={colombiano}
                        onClick={e => setDatosPersona({ ...datosPersona, [e.target.name]: e.target.checked })}
                    />
                </div>
                <div className='contenedor-boton'>
                    <button className='btn btn-success'>Save</button>
                </div>
            </form>


        </Componente>
    )
}

export default Form
