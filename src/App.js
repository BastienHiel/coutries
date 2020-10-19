import React from 'react';
import './App.sass';

import Wording from './Wording'; 
import Riddle from './Riddle'; 

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Wording />
        <Riddle phrase='test' />
      </div>
    ); 
  }
}

export default App;
