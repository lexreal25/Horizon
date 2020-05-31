import React from 'react';
import Layout from './Layout';
import Slides from './Slider';
import OurPlans from './OurPlans';
import Card from './Card';
import Footer from './Footer';
import './App.css';

function App() {
  return (
      <div className="App">
          <Layout />
          <Slides />
          <br></br>
          <OurPlans />
          <Card />
          <Footer />
    </div>
  );
}

export default App;

      
