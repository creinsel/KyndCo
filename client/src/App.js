import React from 'react';

import './App.css';
import Nav from './Components/Nav';
import Bootstrapintro from './Components/intro';
import Bootstrapabout from './Components/about';
import Badge from './Components/badge';
import Team from './Components/team';
import Footer from './Components/footer';

function App() {
   
  return (
   <>
   <Nav />
    <Bootstrapintro />
    <Bootstrapabout />
    <Badge />
    <Team />
    <Footer />
  </>
  );
}

export default App;
