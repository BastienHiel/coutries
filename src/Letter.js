import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Button } from 'semantic-ui-react'; 

import './Letter.sass'; 

const Letter = ({ disabled, value, onClick }) => <Button basic color="blue" className='letter' disabled={disabled} onClick={onClick}>{value}</Button>;

export default Letter; 

Letter.propTypes = {
    disabled: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired
}