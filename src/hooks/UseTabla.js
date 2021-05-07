import { useEffect, useState } from 'react'
import { db } from '../FirebaseConfig'
import Swal from 'sweetalert2'

const UseTabla = () => {

    //state de todas las personas
    const [todasPersonas, setTodasPersonas] = useState([])

    //state de las personas a mostrar
    const [personas, setPersonas] = useState([])

    //state que guarda el primer doc de toda la base de datos
    const [primerDocTodos, setPrimerDocTodos] = useState({})

    //state que guarda el ultimo doc de toda la base
    const [ultimoDocTodos, setUltimoDocTodos] = useState({})

    //bloquear boton anterior
    const [mostrarBotonAnterior, setMostrarBotonAnterior] = useState(true)

    //bloquear boton siguiente
    const [mostrarBotonSiguiente, setMostrarBotonSiguiente] = useState(true)

    const [primerDoc, setPrimerDoc] = useState({})
    const [ultimoDoc, setUltimoDoc] = useState({})

    useEffect(() => {
        const guardarDatos = async () => {
            await db.collection("personas").orderBy("nombre")
                .onSnapshot((doc) => {
                    const ultimo = doc.docs[doc.docs.length - 1];
                    const primero = doc.docs[0] || 0
                    const resultado = doc.docs.map(item => {

                        setUltimoDocTodos({ id: item.id, ultimo: ultimo })
                        setPrimerDocTodos({ id: doc.docs[0].id, primero: primero })
                        return {
                            id: item.id,
                            ...item.data()
                        }
                    })

                    setTodasPersonas(resultado)

                });
        }

        guardarDatos()

    }, [])

    useEffect(() => {
        const guardarDatos = async () => {
            await db.collection("personas").orderBy("nombre")
                .limit(3).onSnapshot((doc) => {
                    const ultimo = doc.docs[doc.docs.length - 1];
                    const primero = doc.docs[0] || 0
                    const resultado = doc.docs.map(item => {

                        setUltimoDoc({ id: item.id, ultimo: ultimo })
                        setPrimerDoc({ id: doc.docs[0].id, primero: primero })

                        return {
                            id: item.id,
                            ...item.data()
                        }
                    })

                    setPersonas(resultado)
                });
        }

        guardarDatos()

    }, [])

    const paginaAnterior = async () => {
        await db.collection("personas")
            .orderBy("nombre")
            .endAt(primerDoc.primero)
            .limit(3).onSnapshot((doc) => {
                const ultimo = doc.docs[doc.docs.length - 1] || null;
                const primero = doc.docs[0] || null;
                const resultado = doc.docs.map(item => {

                    setUltimoDoc({ id: item.id, ultimo: ultimo })
                    setPrimerDoc({ id: doc.docs[0].id, primero: primero })

                    return {
                        id: item.id,
                        ...item.data()
                    }
                })

                setPersonas(resultado)
            });
    }

    const paginaSiguiente = async () => {
        await db.collection("personas")
            .orderBy("nombre")
            .startAfter(ultimoDoc.ultimo)
            .limit(3).onSnapshot((doc) => {
                const ultimo = doc.docs[doc.docs.length - 1];
                const primero = doc.docs[0] || null;
                const resultado = doc.docs.map(item => {
                    setUltimoDoc({ id: item.id, ultimo: ultimo })
                    setPrimerDoc({ id: doc.docs[0].id, primero: primero })

                    return {
                        id: item.id,
                        ...item.data()
                    }
                })

                setPersonas(resultado)


            });
    }

    // effect que controla el boton anterior
    useEffect(() => {
        if (personas.length !== 0) {
            if (primerDoc.id === primerDocTodos.id) {
                setMostrarBotonAnterior(false)
            } else {
                setMostrarBotonAnterior(true)
            }
        }

    }, [primerDoc, primerDocTodos, personas])

    //efect que cotrola el boton siguiente
    useEffect(() => {
        if (personas.length !== 0) {
            if (ultimoDoc.id === ultimoDocTodos.id) {
                setMostrarBotonSiguiente(false)
            } else {
                setMostrarBotonSiguiente(true)
            }
        }

    }, [ultimoDoc, ultimoDocTodos, personas])


    /* eliminar Pedido */
    const eliminarUsuario = id => {
        Swal.fire({
            title: 'Realmente lo Quieres eliminar?',
            text: "Un Usuario Que Se Elimina no se Puede Recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Se Ha Eliminado con Exito.',
                    'success'
                )

                db.collection('personas').doc(id).delete()

            }
        })
    }

    return {
        todasPersonas,
        personas,
        mostrarBotonSiguiente,
        mostrarBotonAnterior,
        paginaAnterior,
        paginaSiguiente,
        eliminarUsuario
    }
}



export default UseTabla
