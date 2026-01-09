import { useEffect, useState } from 'react';
import Card from './Card';
import BgChanger from './projects/BgChanger/BgChanger';
import PassGenerator from './projects/PasswordGenerator/PassGenerator';
import InputPage from './projects/CurrencyConverter/InputPage';
import Navbar from './projects/RouteWebsite/conponents/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './projects/RouteWebsite/conponents/Footer';
import Home from './projects/RouteWebsite/pages/Home';
import AppContextProvider from './Context/AppContextProvider';
import Profile from './projects/MiniContextProject/Components/Profile';
import Login from './projects/MiniContextProject/Components/Login';
import { ThemeProvider } from './projects/MiniContextProject/Components/Theme';
import ThemeBtn from './projects/MiniContextProject/Components/ThemeBtn';
import Cards from './projects/MiniContextProject/Components/Card';
import ThemeProject from './projects/MiniContextProject/Pages/ThemeProject';
const App = () => {
 

  /* 
  
  
  */
  


  return (
    <>
    <ThemeProject/>
    
    </>
    
    
  );
};

export default App;