import React, { useState, useEffect } from 'react'

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
    APICalls.populatePersonListState(setPersons).catch(error => console.log(error));
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
      const person = {name: newName, number: newNumber};
      APICalls.newPerson(person, persons, setPersons).catch(error => console.log(error));

    } else {
      const doChange = window.confirm(`${newName} is already added to phonebook, do you want to replace the old number with a new one?`);
      if (doChange) {
        const foundPerson = {
          ...foundPersons[0],
          number: newNumber
        }

        const newPersonList =[...persons];
        for (let i=0; i<newPersonList.length; i++) {
          if (newPersonList[i].name === newName) {
            newPersonList.splice(i, 1);
          }
        }

        APICalls.updateNumber(foundPerson, newPersonList, setPersons);
      }
    }
  }

  function deletePerson(id, name) {
    const doDelete = window.confirm(`Do you want to remove ${name}?`);

    if (doDelete) {
      APICalls.deletePerson(id).catch(error => console.log(error));

      const newPersonList = [...persons];
      for (let i=0; i<newPersonList.length; i++) {
        if (newPersonList[i].id === id) {
          newPersonList.splice(i, 1);
          setPersons(newPersonList);
        }
      }
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
        <PersonContainer persons={persons} searchString={search} deletePerson={deletePerson}/>
    </div>
  )

}

export default App