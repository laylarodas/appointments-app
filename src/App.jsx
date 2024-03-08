import { useState } from 'react';
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"

function App() {

  const [pets, setPets] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 mx-4 md:mx-24 md:flex text-center">
        <Form
          pets={pets}
          setPets={setPets}
        />
        <List 
          pets={pets}
          
        />
      </div>
    </div>
  )
}

export default App
