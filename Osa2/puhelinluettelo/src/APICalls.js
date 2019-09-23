import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

function populatePersonListState(setPersons) {
    const request = axios.get(baseUrl);
    return request.then(response => setPersons(response.data));
}

function newPerson(newObject) {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

export default {
    populatePersonListState: populatePersonListState,
    newPerson: newPerson
};

