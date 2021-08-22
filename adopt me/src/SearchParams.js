import React from 'react'
import { ReactDOM } from 'react'
import { useState, useEffect } from 'react'
import Pet from './Pet'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA")
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])
    const breeds = []

    // useEffect(
    //     requestPets()
    // )
    useEffect(() => {
        console.log("part12")
        requestPets();
        
    }, [])

    async function requestPets() {
        console.log("part1")
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        console.log(res)
        const json = await res.json();
        console.log(json)

        setPets(json.pets)
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        onChange={e => setLocation(e.target.value)} 
                        placeholder="Location" 
                    />
                </label>
                <label htmlFor='animal'>
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                    <option />
                    {
                        ANIMALS.map(animal => (
                            <option value = {animal} key={animal}>
                                {animal}
                            </option>
                        ))
                    }
                    </select>
                </label>
                <label htmlFor='breed'>
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                    <option />
                    {
                        breeds.map(breed => (
                            <option value = {breed} key={breed}>
                                {breed}
                            </option>
                        ))
                    }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams