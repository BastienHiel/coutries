import React from 'react'; 
import PropTypes from 'prop-types'; 

import './Letters.sass'; 
import Letter from './Letter'; 


const Letters = ({ alphabet, usedLetters, onClick }) => {
    const letterList = alphabet.map((letter, i) => 
        <Letter 
            value={letter} 
            key={i} 
            onClick={onClick} 
            disabled={ usedLetters.has(letter) ? true : false} />
    );

    return (
        <div className='letters'>        
            {letterList}
        </div>
    );
}

export default Letters; 

Letters.propTypes = {
    alphabet: PropTypes.arrayOf(PropTypes.string).isRequired, 
    usedLetters: PropTypes.instanceOf(Set), 
    onClick: PropTypes.func.isRequired
}