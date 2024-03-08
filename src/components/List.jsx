import React from 'react'
import { Patient } from './Patient'

export const List = ({ pets }) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
      {pets && pets.length ?
        <>
          <h2 className='font-black text-3xl text-center'>Patient List</h2>
          <p className='text-xl mt-5 mb-6 text-center'>
            Administration of {''}
            <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
          </p>

          {pets.map(pet => (
            <Patient
              key={pet.id}
              pet={pet}
            />
          ))}

        </>

        : <>
          <h2 className='font-black text-3xl text-center'>No Patient Yet</h2>
          <p className='text-xl mt-5 mb-6 text-center'>
            Administration of {''}
            <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
          </p>
          
        </>}


    </div>
  )
}
