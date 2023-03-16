import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Tony Stark',
            superheroname: 'IronMan'
        },
        {
            id: 2,
            name: 'Bruce Banner',
            superheroname: 'Hulk'
        },
        {
            id: 3,
            name: 'Peter Parker',
            superheroname: 'SpiderMan'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/> )
    // key must be unique to help React identify which items have changed,added or removed
    // If static list will never be reordered or filtered , then we will use index as a key
    return <div>{personList}</div>
}

export default NameList
