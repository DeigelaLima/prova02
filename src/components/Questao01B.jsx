import React from 'react';

const Questao01B = ({children}) => {

    let disciplinas = ["CG", "WEB", "Requisitos de Software", "Manuteção de Softwre", "Adestração de Ornitorrinco"]
    return (
        <div>
            <h1>Disciplinas</h1>
            <ul>
                {React.Children.map(disciplinas,(disciplina)=> <li>{disciplina}</li>)}
            </ul>
        </div>
    )
}

export default Questao01B