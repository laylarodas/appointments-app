import React from 'react'

export const Patient = () => {
  return (
    <div className='m-3 bg-white text-left shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Name: {''}
          <span className='font-normal normal-case'>Pet</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Owner: {''}
          <span className='font-normal normal-case'>Name</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: {''}
          <span className='font-normal normal-case'>email@email.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Date: {''}
          <span className='font-normal normal-case'>02-20-2021</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Description: {''}
          <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dignissimos eligendi error corrupti, laboriosam voluptate, tempore doloremque quia adipisci dicta laudantium ea cum. Officia velit tempora deleniti nam minus similique!</span>
        </p>
      </div>
  )
}
