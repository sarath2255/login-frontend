import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Auth from './Auth';
import Dash from './Dash';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Auth/>} />
        <Route  path='/login'  element={<Auth/>} />
        <Route  path='/register'  element={<Auth register />} />
        <Route  path='/dash'  element={<Dash/>} />
      </Routes>
    </div>
  );
}

export default App;
