import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { useThemeContext } from './providers/Theme';
import  './styles/globalStyles.css';

function App() {
  const { theme } = useThemeContext();
  return (
    <div className={`bg-${theme === 'dark'? 'black-200': 'white-100'} h-screen`}>
     <Header/>
     <Home/>
    </div>
  );
}

export default App;
