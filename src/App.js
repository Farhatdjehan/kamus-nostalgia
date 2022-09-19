import { useEffect, useState } from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import { googleAnalytics } from './helpers/common';

function App() {

  const [keyValue, setKeyValue] = useState(0);
  
  useEffect(() => {
    googleAnalytics();
  }, [])

  useEffect(() => {
    let kamnos = document.querySelectorAll("#kamnos");
    setTimeout(() => {
      if (kamnos.length > 0) {
        setKeyValue(keyValue + 1);
      }
    }, 1000);
  }, [])

  return (
    <MainScreen key={keyValue} />
  );
}

export default App;
