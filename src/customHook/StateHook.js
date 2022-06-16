import {useState} from "react";
import Swal from "sweetalert2";

const StateHook = () =>{


    const [datos, setDatos] = useState({
        functionT : '',
        initialValue : '',
        tolerancia : '',
        iterations : ''
    });

    const [success, setSuccess] = useState(false);

    const [checkInput, setCheckInput] = useState(false);


    const handleInputChange = (e) =>{
        //console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }


    const validateSpaces = (e) =>{
        e.preventDefault();
        if (datos.function !== '' && datos.initialValue !== '' && datos.tolerancia !== '' && datos.iterations !== ''){
            setSuccess(true);
            setCheckInput(true);

            Swal.fire({
                icon: 'success',
                title: 'Calculo realizado con exito!',
                timer: 5000
            })

        } else{
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Hace falta ingresar datos!',
                timer: 5000
            })
        }
    }

    const handleInputReset = () =>{
        if (datos.function !== '' && datos.initialValue !== '' && datos.tolerancia !== '' && datos.iterations !== ''){
            setSuccess(false);
            setCheckInput(false);
            Swal.fire({
                icon: 'success',
                title: 'Se ha reseteado con exito!',
                timer: 5000
            })
        }
        if(success === false){
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Ya se han reseteado los datos!',
                timer: 5000
            })
        }
        if (datos.functionT === "" && datos.initialValue === "" && datos.tolerancia === "" && datos.iterations === ""){
            Swal.fire({
                icon: 'question',
                title: 'No hay datos!',
                timer: 5000
            })
        }
        // setDatos({
        //   functionT : '',
        //   initialValue : '',
        //   tolerancia : '',
        //   iterations : '',
        // })
    }

    return [handleInputChange, handleInputReset, validateSpaces, checkInput, success, datos]

}
export default StateHook;