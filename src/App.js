import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {Footer} from './Footer';
import {Content} from './Content';
import Login from './Login';
import Main from './Main';
import Credit from './Credit';
import { Routes, Route } from 'react-router-dom'
import Register from './register';
import LoginButton from './LoginButton';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginButton/>} />
      <Route path="login" element={<LoginButton/>} />
      <Route path="main" element={<Main/>} />
      <Route path="credit" element={<Credit/>} />
      <Route path="testweb" element={<Login/>} />
      
      {/* <Route path="register" element={<Register/>}/> */}
    </Routes>
  );
}

export default App;
