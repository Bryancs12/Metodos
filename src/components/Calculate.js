import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Table } from './Table'

export const Calculate = () => {


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
    setSuccess(false);
    setCheckInput(false);
    // setDatos({
    //   functionT : '',
    //   initialValue : '',
    //   tolerancia : '',
    //   iterations : '',
    // })
   }

  return (
    <div className='pt-6'>

      <div className='text-2xl font-semibold text-center pt-8'>Calculate</div>

      <form onSubmit={validateSpaces}
      className='sm:grid grid-cols-2 sm:gap-4 bg-gray-50 container mx-auto p-4 border-2 border-neutral-200 rounded-md mt-4 mb-8'
      >

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite la funcion
          <br />
          <input type="text"
            name='functionT'
            onChange={handleInputChange}
            disabled={checkInput}
            className="w-72 sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />

        </div>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite el valor inicial
          <br />
          <input type="text"
            name='initialValue'
            onChange={handleInputChange}
            disabled={checkInput}
            autoComplete='off'
            className="w-72  sm:w-72 border-2 border-neutral-300 rounded w-1/5" 
          />
        </div>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite la tolerancia
          <br />
          <input type="text"
            name='tolerancia'
            onChange={handleInputChange}
            disabled={checkInput}
            //autoComplete='off'
            className="w-72 sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />
        </div>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite la cantidad de iteraciones
          <br />
          <input type="text"
            name='iterations'
            onChange={handleInputChange}
            disabled={checkInput}
            autoComplete='off'
            className="w-72  sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />
        </div>

      </form>

      <div className='flex justify-center pt-8'>

        <button
          className='bg-blue-600 hover:bg-blue-400 border-2 text-white rounded-lg pl-3 pr-3 pt-1 pb-1 mr-20'
          type='submit'
          onClick={validateSpaces}
        >
          Calculate
        </button>

        <button
          className='bg-green-700 hover:bg-green-400 border-2 text-white rounded-lg pl-3 pr-3 pt-1 pb-1 mr-12'
          onClick={handleInputReset}
        >
          Resetear
        </button>
      </div>

    { success && 
    <Table 
    functionT={datos.functionT}
    initialValue={datos.initialValue}
    tolerancia={datos.tolerancia}
    iterations={datos.iterations}
    />} 


    </div>
  )

}
