import { useState } from 'react';
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 mx-4 md:mx-24 md:flex text-center">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
        />
        <List 
          patients={patients}
          setPatient={setPatient}
        />
      </div>
    </div>
  )
}

export default App
