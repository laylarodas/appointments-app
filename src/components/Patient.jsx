import React from 'react'

export const Patient = ({pet}) => {

  const {name, owner, email, date, description} = pet;
  return (
    <div className='md:my-3 md:mx-5 mt-2 bg-white text-left shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Name: {''}
          <span className='font-normal normal-case'>{name}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Owner: {''}
          <span className='font-normal normal-case'>{owner}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Date: {''}
          <span className='font-normal normal-case'>{date}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Description: {''}
          <span className='font-normal normal-case'>{description}</span>
        </p>
      </div>
  )
}
