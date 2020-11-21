import React, { useEffect, useState } from 'react';
import './App.sass';

import { ALPHABET, COUNTRY, STARTING_LIVES } from './constants'; 
import Letters from './Letters'; 
import Lives from './Lives'; 
import Reset from './Reset'; 
import Result from './Result'; 
import Riddle from './Riddle';
import Wording from './Wording';  

const App = () => {
  const [inProgress, setInProgress] = useState(true); 
  const [livesLeft, setLivesLeft] = useState(STARTING_LIVES); 
  const [matchedLetters, setMatchedLetters] = useState(new Set()); 
  const [reset, setReset] = useState(false); 
  const [riddle, setRiddle] = useState(""); 
  const [riddleSet, setRiddleSet] = useState(new Set()); 
  const [usedLetters, setUsedLetters] = useState(new Set()); 
  const [won, setWon] = useState(false); 

  const addToUsedLetters = (letter) => {
    setUsedLetters(usedLetters => new Set(usedLetters).add(letter)); 
  }
  //only function given in the exercise
  const computeDisplay = (phrase, usedLetters) => {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'));
  }

  const computeRiddleSet = (riddle) => {
    return new Set([...riddle.replace(/\s+/g, '').split('')]);
  }

  const generateRiddle = () => {    
    return COUNTRY[Math.floor(Math.random()*COUNTRY.length)];  
  }

  const handleLetterClick = (e) => {
    const clickedLetter = e.target.innerHTML; 
    addToUsedLetters(clickedLetter);
    matchRiddleSet(clickedLetter); 
  }

  const handleResetClick = () => {
    setReset(true); 
  }

  const matchRiddleSet = (letter) => {
    if (riddleSet.has(letter)) {
      setMatchedLetters(matchedLetters => new Set(matchedLetters).add(letter)); 
    } else {
      setLivesLeft(livesLeft => livesLeft - 1); 
    }
  }

  useEffect(() => {
    setRiddle(generateRiddle());  
  }, []); 

  useEffect(() => {
    setRiddleSet(computeRiddleSet(riddle));
  }, [riddle]); 

  useEffect(() => {
    if (livesLeft === 0) {
      setInProgress(false); 
    }
  }, [livesLeft]); 

  useEffect(() => {
    if (riddleSet.size === matchedLetters.size && riddleSet.size !== 0) {
      setInProgress(false); 
      setWon(true); 
    }
  }, [matchedLetters, riddleSet]); 

  useEffect(() => {
    if (reset) {
      setInProgress(true); 
      setLivesLeft(STARTING_LIVES); 
      setMatchedLetters(new Set()); 
      setReset(false); 
      setRiddle(generateRiddle()); 
      setUsedLetters(new Set()); 
      setWon(false); 
    }
  }, [reset]); 


  const phrase = computeDisplay(riddle, usedLetters);
  
  return (
    <div className='app'>
      {!inProgress && <Result won={won} />}
      <Wording />        
      <Riddle phrase={phrase} />
      <Lives livesLeft={livesLeft} startLives={STARTING_LIVES} />
      {inProgress && <Letters 
        alphabet={ALPHABET} 
        usedLetters={usedLetters}
        onClick={handleLetterClick}
         />}
      {!inProgress && <Reset onClick={handleResetClick} />}
    </div>
  ); 
}

export default App;
