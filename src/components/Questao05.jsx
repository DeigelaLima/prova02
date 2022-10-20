import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Questao05 = () => {

    const [countries, setCountries] = useState([])
    const [populousCountry, setPopulousCountry] = useState({name: "", population: 0})
    const [continent, setContinent] = useState('africa')
    const [menosOumais, setMenosOumais] = useState('mais')
    
    const calculatePopulousCountry = (countries) => {
        var bigPopulation = 0
        var bigCountry;
        countries.forEach(
            country => {
                if(country.population > bigPopulation){
                    bigPopulation = country.population
                    bigCountry = country
                }
            }
        )
        setPopulousCountry(bigCountry)
    }

    const calculatePopulousCountryMinor = (countries) => {
        var smallPopulation = 100000000000
        var smallCountry;
        countries.forEach(
            country => {
                if(country.population < smallPopulation){
                    smallPopulation = country.population
                    smallCountry = country
                }
            }
        )
        setPopulousCountry(smallCountry)
    }
    //como fosse um construtor
    useEffect(
        () => {
            axios.get('https://restcountries.com/v2/region/'+continent+'?fields=name,population')
            //se der certo
            .then(
                (response)=>{
                    //seta o paises
                    console.log(response.data)
                    setCountries(response.data)
                    if(continent ===  'americas' || continent === 'africa'){
                        setMenosOumais('mais')
                        calculatePopulousCountry(response.data)
                    }else{
                        setMenosOumais('menos')
                        calculatePopulousCountryMinor(response.data)
                    }
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
        [continent]
    )

    return (
        <div className="question">
            <h2 className='question-title'>Questão 05</h2>
            <h1> Lista de paises da {continent} </h1>
            
            <ul>
                {countries.map((country) => <li>{country.name}, {country.population}</li>)}
            </ul>

            <h3> País {menosOumais} populoso da {continent} </h3>
            {populousCountry.name} com {populousCountry.population} habitantes<br/>
            <button type="button" className="btn btn-primary buttonpad" onClick={()=>setContinent('americas')}>América</button>
            <button type="button" className="btn btn-primary buttonpad" onClick={()=>setContinent('asia')}>Ásia</button>
        </div>
    )
}

export default Questao05;