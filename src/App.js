
import './App.css';
import React, { useState } from 'react';

function App() {

  const[returnedData, setReturnedData] = useState(['Hi There.... ']);


  const getData = async(url)=> {
    const newData= await fetch(url, {
      method: 'Get',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    })
    .then(res => res.json());
       console.log(newData);
       setReturnedData(newData.result);
      }

  
  return (
    <div className="App">
      <button onClick={ ()=> getData('/quit')}>Click to Quit</button>
      {returnedData}
    </div>
  );
}
export default App;
