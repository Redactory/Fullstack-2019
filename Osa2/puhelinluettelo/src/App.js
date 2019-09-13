import React, { useState } from 'react'
import PersonContainer from './components/PersonContainer';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  function addPerson(event) {
    event.preventDefault();

    let foundPersons = [];
    foundPersons = persons.filter(element => {
      if (element.name === newName) {
        return newName;
      }
    })
    
    if (foundPersons.length === 0) {
      const person = [{name: newName, number: newNumber}];
      const addedPersons = persons.concat(person);

      setPersons(addedPersons);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
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