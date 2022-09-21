import React from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import './PokeCard.css'

function PokeCard(props) {
    const [pokeData, setPokeData] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(props.p.url)
            .then(res => setPokeData(res.data))
            .catch(err => console.log(err.message));
    }, [props.p])

    return (
        <div className='poke-card'>
            <p className='poke-id'>{pokeData.id}</p>
            <div className='poke-img'>
                {pokeData.sprites ?
                    <img src={pokeData.sprites.other.dream_world.front_default} alt={props.p.name} />
                    : <span>Loading Image...</span>
                }
            </div>
            <h4 className='poke-name'>{props.p.name}</h4>
            <Button className="btn-info" variant="primary" onClick={() => setShow(true)}>Information</Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassname="modal-50px"
                aria-labelledby="pokemon-name"
                className='window'
            >
                <Modal.Header className="m-head" closeButton>
                    <Modal.Title id="pokemon-name">Pokemon:   {props.p.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='details'>
                        <div className='outlook'>
                            {pokeData.sprites ?
                                <img src={pokeData.sprites.other.dream_world.front_default} alt={props.p.name} />
                                : <span>Loading Image...</span>
                            }
                        </div>
                        <div className='infos'>
                            <p>Type: <img src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023__340.png" alt="ability-logo"/> {pokeData.types ?
                                pokeData.types.map((t, i) => <li key={i}>{t.type.name} </li>)
                                : <span>No type found</span>}
                            </p>
                            <p>Abilities: <img src="https://i.insider.com/57910997dd0895a56e8b4596?width=600&format=jpeg&auto=webp" alt="ability-logo"/>
                                {pokeData.abilities ?
                                    pokeData.abilities.map((a, i) => <li key={i}>{a.ability.name}</li>)
                                    : <span>No Ability</span>}
                            </p>
                            <p>Weight: {pokeData.weight}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default PokeCard