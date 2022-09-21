import React from 'react'
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import SearchPoke from './SearchPoke';
import './PokeList.css';

function PokeList(props) {
    const [poke, setPoke] = useState(props.pokemon);

    useEffect(() => {
        setPoke(props.pokemon)
    }, [props.pokemon]);

    return (
        <div className='poke-list'>
            <SearchPoke setPokemon={setPoke} pokemon={props.pokemon}/>
            <div className='poke-data'>
                {poke.length > 0 ?
                    poke.map((p, i) => <PokeCard p={p} key={i}/>)
                    : <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default PokeList