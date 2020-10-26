import React from 'react';
import './App.sass';

import { ALPHABET, COUNTRY } from './constants'; 
import Letters from './Letters'; 
import Lives from './Lives'; 
import Reset from './Reset'; 
import Result from './Result'; 
import Riddle from './Riddle';
import Wording from './Wording';  

class App extends React.Component {
  state = {   
    usedLetters: new Set(),
    goodLetters: new Set(), 
  }

  addToUsedLetters(letter) {
    this.setState(
      (prevState) => ({ usedLetters: prevState.usedLetters.add(letter) })
    )
  }

  //only function given in the exercise
  computeDisplay(phrase, usedLetters) {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'));
  }

  //arrow function for binding 
  handleLetterClick = (e) => {
    const clickedLetter = e.target.innerHTML; 
    this.addToUsedLetters(clickedLetter); 
  }

  render() {
    const { usedLetters } = this.state; 
    return (
      <div className='app'>
        <Result won={true} />
        <Wording />        
        <Riddle phrase='test' />
        <Lives />
        <Letters 
          alphabet={ALPHABET} 
          usedLetters={usedLetters}
          onClick={this.handleLetterClick} /> 
        <Reset />
      </div>
    ); 
  }
}

export default App;
