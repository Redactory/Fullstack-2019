import React, { useState } from 'react'
import PersonContainer from './components/PersonContainer';
import SearchBar from './components/SearchBar';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

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

  // HANDLERS
  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar value={search} handleSearchChange={handleSearchChange}/>
      <h2>Add a new</h2>
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
        <PersonContainer persons={persons} searchString={search}/>
    </div>
  )

}

export default App