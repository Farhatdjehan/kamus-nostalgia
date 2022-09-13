import { useEffect } from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import { googleAnalytics } from './helpers/common';

function App() {

  useEffect(() => {
    googleAnalytics();
  }, [])
  return (
    <MainScreen />
  );
}

export default App;
