import { useState, useEffect } from 'react';
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  }

  useEffect(() => {
    const getData = () => {
      const data = JSON.parse(localStorage.getItem('patients')) ?? [];

      setPatients(data);
    }

    getData();
    
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);



  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 mx-4 md:mx-24 md:flex text-center">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <List 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
