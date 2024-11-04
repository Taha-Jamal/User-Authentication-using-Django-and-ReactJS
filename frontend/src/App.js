import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './routes/login';

import { ChakraProvider } from '@chakra-ui/react'
import Menu from './routes/menu';

function App() {
  return (
    <>
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Menu/>}/>
      </Routes>
    </Router>
    </ChakraProvider>
    </>
  );
}

export default App;
