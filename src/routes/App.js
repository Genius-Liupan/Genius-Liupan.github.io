import React from 'react';

import Home from './home/Home';

import './App.scss';

function App(props) {
  const { match: { isExact }} = props;
  return (
    <div className="App">
      {props.children}
      {isExact && <Home />}
    </div>
  );
}

export default App;
