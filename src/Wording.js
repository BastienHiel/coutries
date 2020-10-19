import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Message } from 'semantic-ui-react'; 

const Wording = () => (
    <Message>
        <Message.Header>Découvrez le mot masqué</Message.Header>
        <p>Indice: il s'agit d'un pays</p>
    </Message>
)

export default Wording; 

Wording.propTypes = {
}