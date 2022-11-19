import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './App.css';


function Credit() {
    let navigate = useNavigate()

return (

    <div className='body1'>
        <h1 className='header'>Credit</h1> <br></br>
        <input type={"text"} placeholder="enter text" ></input><br></br><br></br>
        <input type={"text"} placeholder="enter text"></input><br></br><br></br>
        <button onClick={() => navigate('/Main')}>เข้าสู่ระบบ</button>  <br></br><br></br>
        <button onClick={() => navigate('/Login')}>ออกจากระบบ</button>  
    </div>
    
);
}

export default Credit;