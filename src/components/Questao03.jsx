import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Questao03 = () => {

    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)    

    // const [searchParams, setSearchParams] = useSearchParams();
    // const offset = searchParams.get('offset') || 0 // retorna o parametro desejado (nesse casso, o offset)
    
    const [pokemons, setPokemons] = useState([])
    //como fosse um construtor
    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            //se der certo
            .then(
                (response)=>{
                    //seta o pokemans
                    setPokemons(response.data.results)
                }
            )
            //se der errado
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        },
        // lista de variaveis
        [limit, offset]
    )

    const showNextPokemons = () => {
        setOffset(offset + 10)
    }

    return (
        <div className='question'>
            <h2 className='question-title'>Questão 03</h2>
            <h1> Pokemons</h1>
            <ul>
                {pokemons.map((pokemon) => <li>{pokemon.name}</li>)}
            </ul>

            <button type="button" onClick={() => showNextPokemons()}>mostrar proximos pokemoins</button>
        </div>
    )
}

export default Questao03
