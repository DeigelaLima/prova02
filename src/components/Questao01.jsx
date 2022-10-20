import React from 'react';

const Questao01 = (props) => {
    return (
        <div className='question'>
            <h2 className='question-title'>Questão 01</h2>
            {props.children}
        </div>
    )
}

export default Questao01