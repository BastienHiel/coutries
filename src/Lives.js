import React from 'react'; 
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'; 

import './Lives.sass'; 

const Lives = ({ livesLeft, startLives }) => {
    const lives = [...Array(startLives)].map((_, i) => <Icon color='blue' size='large' key={i} name={ i < livesLeft ? 'heart' : 'heart outline'} />)
    return(
        <div className='test'>
            {lives}      
        </div>
    ); 
}

export default Lives; 

Lives.propTypes = {
    livesLeft: PropTypes.number.isRequired, 
    startLives: PropTypes.number.isRequired
}