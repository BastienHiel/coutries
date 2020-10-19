import React from 'react'; 
import PropTypes from 'prop-types'; 

import Letter from './Letter'; 

const Letters = ({ alphabet }) => {
    const letterList = alphabet.map((letter, i) => <Letter value={letter} key={i} />);
    return (
        <div className='letters'>        
            {letterList}
        </div>
    );
}

export default Letters; 

Letters.propTypes = {
    alphabet: PropTypes.arrayOf(PropTypes.string).isRequired
}