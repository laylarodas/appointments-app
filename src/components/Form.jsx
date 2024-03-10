import React from 'react'
import { useState, useEffect } from 'react'
import { Error } from './Error';

export const Form = ({ setPatients, patients, patient }) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setDescription(patient.description);
    }
  }, [patient]);


  const idGenerator = () => {
    const random = Math.random().toString(36).substr(2);
    const dates = Date.now().toString(36);

    return random + dates;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if ([name, owner, email, date, description].includes('')) {
      //console.log('All fields are required');
      setError(true);
      return;

    } else {
      console.log('All fields are filled');
      setError(false);

      //create object
      const petObject = {
        name,
        owner,
        email,
        date,
        description,
        id: idGenerator()
      }

      if (patient.id) {
        petObject.id = patient.id;
        const updatedPets = patients.map(petState => petState.id === patient.id ? petObject : petState);
        setPatients(updatedPets);

      } else {
        petObject.id = idGenerator();
        setPatients([...patients, petObject]);
      }

      //reset form
      setName('');
      setOwner('');
      setEmail('');
      setDate('');
      setDescription('');
    }

  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl'>Pet Monitoring Form</h2>
      <p className='text-lg mt-5 mb-6 text-center font-bold'>
        Add Pets and {''}
        <span className='text-indigo-600'>Administration</span>
      </p>

      <form action="" onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <Error>All fields are required</Error>}
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="name">Pet Name:</label>
          <input type="text" id='name' placeholder='Introduce pet name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="owner">Owner Name:</label>
          <input type="text" id='owner' placeholder='Introduce owner name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={owner} onChange={(e) => {
            setOwner(e.target.value)
          }} />
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Introduce email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="date">Date</label>
          <input type="date" id='name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={date} onChange={(e) => {
            setDate(e.target.value)
          }} />
        </div>
        <div className='text-left mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="description">Description</label>
          <textarea type="text" id='description' placeholder='Describe the sinthoms' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={description} onChange={(e) => {
            setDescription(e.target.value)
          }} />
        </div>

        <input type="submit" value={patient.id ? 'Edit Patient' : 'Add Patient'} className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-md hover:bg-indigo-700 cursor-pointer transition-all' />
      </form>
    </div>
  )
}
