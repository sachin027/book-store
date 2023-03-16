import React from 'react'
import Title from './Title'

function List() {
    const Array = [
        {
            id: 1,
            title: 'Avatar',
            description: 'It collected 3.8 biillion $'
        },
        {
            id: 2,
            title: 'Avenger : Endgame',
            description: 'It collected 3.5 biillion $'
        },
        {
            id: 3,
            title: 'Spiderman : No way home',
            description: 'It collected 1.8 biillion $'
        }
    ]
    const filmList = Array.map(arr => <Title key={arr.title} ti={arr}/> )

    return <div>{filmList}</div>
}

export default List
