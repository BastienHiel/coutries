import React from 'react';
import './App.sass';

import { ALPHABET } from './constants'; 
import Letters from './Letters'; 
import Lives from './Lives'; 
import Reset from './Reset'; 
import Result from './Result'; 
import Riddle from './Riddle';
import Wording from './Wording';  

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Wording />
        <Result won={false} />
        <Lives />
        <Riddle phrase='test' />
        <Letters alphabet={ALPHABET} /> 
        <Reset />
      </div>
    ); 
  }
}

export default App;
