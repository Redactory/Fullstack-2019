import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

function populatePersonListState(setPersons) {
    const request = axios.get(baseUrl);
    return request.then(response => setPersons(response.data));
}

function newPerson(newPerson, persons, setPersons) {
    const request = axios.post(baseUrl, newPerson);
    const savedPerson = request.then(response => {
        const concatedPerson = [];
        concatedPerson.push(response.data);
        const addedPersons = persons.concat(concatedPerson);
        setPersons(addedPersons);
        return response.data;
    });
    
    return savedPerson;
}

function deletePerson(id) {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export default {
    populatePersonListState: populatePersonListState,
    newPerson: newPerson,
    deletePerson: deletePerson
};

