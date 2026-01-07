import { useState } from 'react';
import Card from './Card';

const App = () => {
  let myObj = {
    name: "Rayhan",
    age: 23
  }
  let newArr = [ 1,2,3,4]

  return (
    <>
    
    {/*  sending values from one componant to another */}
    <Card username="littalk" btnText="click here" />
    <Card username="DreamSpire"  />
    </>
    
    
  );
};

export default App;