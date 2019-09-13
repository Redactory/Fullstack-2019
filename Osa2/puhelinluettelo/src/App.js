import React, { useState } from 'react'
import PersonContainer from './components/PersonContainer';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  function addPerson(event) {
    event.preventDefault();

    let foundPersons = [];
    foundPersons = persons.filter(element => {
      if (element.name === newName) {
        return newName;
      }
    })
    
    if (foundPersons.length === 0) {
      const person = [{name: newName}];
      const addedPersons = persons.concat(person);

      setPersons(addedPersons);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  function handleChange (event) {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <PersonContainer persons={persons}/>
    </div>
  )

}

export default App