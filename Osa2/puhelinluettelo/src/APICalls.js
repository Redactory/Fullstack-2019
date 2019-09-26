import axios from 'axios';

function populatePersonListState(setPersons, showNotification) {
    const data = axios.get(`/api/persons`)
        .then(response => setPersons(response.data))
        .catch(error => {
            showNotification(`Fetching person listing failed for some reason.`, 'error');
        });
}

function newPerson(newPerson, persons, setPersons, showNotification) {
    const savedPerson = axios.post(`/api/persons`, newPerson)
        .then(response => {
            const concatedPerson = [];
            concatedPerson.push(newPerson);
            const addedPersons = persons.concat(concatedPerson);
            setPersons(addedPersons);
            showNotification(`${newPerson.name} was added to the number list`, 'passing');

            return response.data;
        })
        .catch(error => {
            showNotification(`Adding ${newPerson.name} to the system caused a problem with message ${error}`, 'error');
        });

    return savedPerson;
}

function deletePerson(id, name, showNotification) {
    const data = axios.delete(`/api/persons/${id}`)
        .then(response => {
            showNotification(`${name} was removed from the number list`, 'passing');
            return response.data
        })
        .catch(error => {
            if (error.response.status === 404){
                showNotification(`Deleting ${name} from the list caused an error.`, 'error');
            }
        });

        return data;
}

function updateNumber(foundPerson, persons, setPersons, showNotification) {
    const data = axios.put(`/${foundPerson.id}`, foundPerson)
        .then(response => {
            const concatedPerson = [];
            concatedPerson.push(foundPerson);
            const newPersonList = persons.concat(concatedPerson);
            setPersons(newPersonList);
            showNotification(`${foundPerson.name} number was updated`, 'passing');

            return response.data
        })
        .catch(error => {
            if (error.response.status === 404){
                showNotification(`${foundPerson.name} has already been removed from the list`, 'error');
            }
        });

        return data;
}

export default {
    populatePersonListState: populatePersonListState,
    newPerson: newPerson,
    deletePerson: deletePerson,
    updateNumber: updateNumber
};

