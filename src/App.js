import React from 'react';
import './App.sass';

import Wording from './Wording'; 

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Wording />
      </div>
    ); 
  }
}

export default App;
