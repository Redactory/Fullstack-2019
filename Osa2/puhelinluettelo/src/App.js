import React, { useState, useEffect } from 'react'
import axios from 'axios';

import PersonContainer from './components/PersonContainer';
import SearchBar from './components/SearchBar';
import PersonForm from './components/PersonForm';
import APICalls from './APICalls';

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  function addPerson(event) {
    event.preventDefault();

    let foundPersons = [];
    foundPersons = persons.filter(element => {
      if (element.name === newName) {
        return newName;
      }
    });
    
    if (foundPersons.length === 0) {
      const person = [{name: newName, number: newNumber}];
      const addedPersons = persons.concat(person);

      const savedPerson = {...person[0]};

      setPersons(addedPersons);
      APICalls.newPerson(savedPerson);
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
      <PersonForm 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        />
      <h2>Numbers</h2>
        <PersonContainer persons={persons} searchString={search}/>
    </div>
  )

}

export default App