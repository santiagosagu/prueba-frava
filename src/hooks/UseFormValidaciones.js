import { useState } from 'react'
import Swal from 'sweetalert2'
import { db } from '../FirebaseConfig'

const UseFormValidaciones = () => {

    const [datosPersona, setDatosPersona] = useState({
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        sexo: '',
        estatura: '',
        colombiano: false
    })

    const guardarPersona = e => {

        const { nombre, apellidos, fechaNacimiento, sexo, estatura } = datosPersona

        e.preventDefault()

        if (nombre.trim().length === 0 || apellidos.trim().length === 0 || fechaNacimiento.trim().length === 0 || sexo.trim().length === 0 || estatura.trim().length === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Datos Incompletos',
                text: 'Todos Los datos son obligatorios',

            })
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Persona agregada con exito'
            })

            db.collection('personas').add(datosPersona)

            setDatosPersona({
                nombre: '',
                apellidos: '',
                fechaNacimiento: '',
                sexo: '',
                estatura: '',
                colombiano: false
            })
        }
    }



    return {
        datosPersona,
        setDatosPersona,
        guardarPersona
    }
}

export default UseFormValidaciones
