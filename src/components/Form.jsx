import React from 'react'

export const Form = () => {
  return (
    <div className='w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl'>Pet Monitoring Form</h2>
      <p className='text-lg mt-5 mb-6 text-center font-bold'>
        Add Pets and {''}
        <span className='text-indigo-600'>Administration</span>
      </p>

      <form action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="name">Pet Name</label>
          <input type="text" id='name' placeholder='Introduce pet name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="owner">Owner Name</label>
          <input type="text" id='owner' placeholder='Introduce owner name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Introduce email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="date">Date</label>
          <input type="date" id='name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="description">Description</label>
          <textarea type="text" id='description' placeholder='Describe the sinthoms' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>

        <input type="submit" value="Add Pet" className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-sm hover:bg-indigo-700 cursor-pointer transition-all' />
      </form>
    </div>
  )
}
