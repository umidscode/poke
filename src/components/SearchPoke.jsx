import React from 'react'
import { useState } from 'react'
import './SearchPoke.css'

function SearchPoke(props) {
    const [search, setSearch] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.setPokemon(props.pokemon.filter(p => {
            return  p.name.includes(search);
        }))

    }

    function handleChange(e) {
        setSearch(e.target.value);
        props.setPokemon(props.pokemon.filter(p => {
            return p.name.includes(e.target.value);
        }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="input-form" value={search} onChange={handleChange} placeholder="Search your pokemon"/>
        </form>
    )
}

export default SearchPoke