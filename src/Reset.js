import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Button } from 'semantic-ui-react';

import './Reset.sass';

const Reset = ({ onClick }) => (
    <div className='reset'>
        <Button color='blue' size='large' onClick={onClick}>Rejouer</Button>
    </div>
)

export default Reset; 

Reset.propTypes = {
    onClick: PropTypes.func.isRequired
}