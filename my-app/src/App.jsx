import { useState } from 'react';
import Card from './Card';
import BgChanger from './projects/BgChanger/BgChanger';
import PassGenerator from './projects/PasswordGenerator/PassGenerator';
import InputPage from './projects/CurrencyConverter/InputPage';
import Navbar from './projects/RouteWebsite/conponents/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './projects/RouteWebsite/conponents/Footer';
import Home from './projects/RouteWebsite/pages/Home';
const App = () => {
  let myObj = {
    name: "Rayhan",
    age: 23
  }
  let newArr = [ 1,2,3,4]

  return (
    <>
    
    {/*  sending values from one componant to another */}
    {/* <Card username="littalk" btnText="click here" />
    <Card username="DreamSpire"  /> */}
    {/* project : 1 */}
    {/* <BgChanger/> */}

    {/* Project : 2 */}
    {/* <PassGenerator/> */}
      {/* Project: 3  */}
    {/* <InputPage/> */}

    {/* <Router>
      <Navbar /> */}
      {/* baki components */}
      {/* <Home/>
      <Footer/>
    </Router> */}

    </>
    
    
  );
};

export default App;