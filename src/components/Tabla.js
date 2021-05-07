import React, { useContext } from 'react'
import Styled from '@emotion/styled'
import UseTabla from '../hooks/UseTabla'
import UsuarioSeleccionadoContext from '../context/usuarioSeleccionado/UsuarioSeleccionadoContext'



const Contenedor = Styled.div`
    margin: 3rem 0;
    border: 1px solid #e1e1e1;
    box-shadow:0px 2px 20px 1px #8c8c8c;
    -moz-box-shadow:0px 2px 20px 1px #8c8c8c;
    -webkit-box-shadow:0px 2px 20px 1px #8c8c8c;
    padding: 1rem;

    @media(min-width: 768px){
        width: 50rem;
    }

    i{
        border: 1px solid #e1e1e1;
        padding: 0.5rem;
        margin-right: 1rem;
        margin-left: 1rem;
        :hover{
            background-color: #e1e1e1;
        }
    }
`

const Tabla = () => {

    const { todasPersonas, personas, mostrarBotonAnterior, mostrarBotonSiguiente, paginaAnterior, paginaSiguiente, eliminarUsuario } = UseTabla()

    const { mostrarUsuario } = useContext(UsuarioSeleccionadoContext)

    return (
        <Contenedor className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Estatura</th>
                        <th scope="col">Colombiano</th>

                    </tr>
                </thead>
                <tbody>
                    {personas.map(item => {

                        const fecha = new Date(item.fechaNacimiento)

                        const ano = new Date().getFullYear() - fecha.getFullYear()

                        return (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.apellidos}</td>
                                <td>{ano}</td>
                                <td>{item.sexo}</td>
                                <td>{item.estatura}</td>
                                <td>{item.colombiano === true ? 'Si' : 'No'}</td>
                                <td><button className='btn btn-success' onClick={() => mostrarUsuario(item)}>Ver</button></td>
                                <td><button className='btn btn-danger' onClick={() => eliminarUsuario(item.id)}>Delete</button></td>
                            </tr>
                        )
                    })

                    }

                </tbody>
            </table>
            <div style={{display: 'flex'}}>
                {mostrarBotonAnterior &&
                    <i className="fas fa-angle-double-left" onClick={() => paginaAnterior()}></i>

                }
                {todasPersonas &&
                    <p>Total registros: {todasPersonas.length}</p>
                }
                {mostrarBotonSiguiente &&
                    <i className="fas fa-angle-double-right" onClick={() => paginaSiguiente()}></i>
                }
            </div>

        </Contenedor>
    )
}

export default Tabla
