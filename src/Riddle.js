import React from 'react'; 
import PropTypes from 'prop-types'; 
 
const Riddle = ({ phrase }) => <p className='riddle'>{phrase}</p>

export default Riddle; 

Riddle.propTypes = {
    phrase: PropTypes.string.isRequired
}