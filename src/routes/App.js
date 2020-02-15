import React from 'react';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import Home from './home/Home';

import './App.scss';

function App(props) {
  const { match: { isExact }, children, ...rest } = props;
  const pathname = props.location.pathname;
  return (
    <div className="App">
      <Header key={pathname} />
      {children}
      {isExact && <Home {...rest} />}
      <Footer />
    </div>
  );
}

export default App;
