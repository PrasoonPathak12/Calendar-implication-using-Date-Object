import logo from './logo.svg';
import './App.css';
import Background from './Components/Background';
import SmolDev from './Components/SmolDev';
import { useState } from 'react';


function App() {

    const [year, setYear] = useState(0);
  return (
   <>
    <Background year={year} />
    
   </>
  );
}

export default App;
