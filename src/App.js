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
    matchedLetters: new Set(), 
    riddle: "",
    riddleSet: new Set(),
    usedLetters: new Set()
  }

  addToUsedLetters(letter) {
    this.setState(
      (prevState) => ({ usedLetters: prevState.usedLetters.add(letter) })
    )
  }

  //populate riddle and riddleSet the first time 
  componentDidMount() {
    const riddle = this.generateRiddle(); 
    const riddleSet = this.computeRiddleSet(riddle); 
    this.setState({
      riddle, 
      riddleSet
    })
  }

  //only function given in the exercise
  computeDisplay(phrase, usedLetters) {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'));
  }

  computeRiddleSet(riddle) {
    return new Set([...riddle.replace(/\s+/g, '').split('')]);
  }

  generateRiddle() {    
    return COUNTRY[Math.floor(Math.random()*COUNTRY.length)];  
  }

  //arrow function for binding 
  handleLetterClick = (e) => {
    const clickedLetter = e.target.innerHTML; 
    this.addToUsedLetters(clickedLetter);
    this.matchRiddleSet(clickedLetter); 
  }

  matchRiddleSet(letter) {
    const { riddleSet } = this.state; 
    if (riddleSet.has(letter)) {
      this.setState(
        (prevState) => ({ matchedLetters: prevState.matchedLetters.add(letter) })
      )
    }
  }

  render() {
    const { riddle, usedLetters } = this.state; 
    const phrase = this.computeDisplay(riddle, usedLetters);
    return (
      <div className='app'>
        <Result won={true} />
        <Wording />        
        <Riddle phrase={phrase} />
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
