import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Message } from 'semantic-ui-react'; 

import './Result.sass'; 

const Result = ({ won }) => {
    const message = `Vous avez ${won ? 'gagné' : 'perdu'} !`; 
    return (
        <Message positive={won} negative={!won}>
            <Message.Header className='result'>{message}</Message.Header>
        </Message>
    ); 
}

export default Result; 

Result.propTypes = {
    won: PropTypes.bool.isRequired
}