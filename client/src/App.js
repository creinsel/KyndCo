import React from 'react';
import './App.css';
import Bootstrapintro from './Components/intro';
import Bootstrapabout from './Components/about';
import Badge from './Components/badge';
import Team from './Components/team';
import Footer from './Components/footer';

function App() {
   
  return (
   <>
    <Bootstrapintro />
    <Bootstrapabout />
    <Badge />
    <Team />
    <Footer />
  </>
    )
 }

export default App;
