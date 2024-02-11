import React, { useState } from 'react'
import Createuser from './components/Createuser';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Updateuser from './components/Updateuser';
import Readuser from './components/Readuser';
import Delete from './components/Delete';

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
     
      <Router>
        <div>
         
        <Link to="/" style={{padding:"15px", backgroundColor:"lightskyblue"}}>Create user</Link> 
        <Link to='/userlist' style={{padding:"15px", backgroundColor:"lightskyblue"}}>Users List</Link> 
        <Link to="/update" style={{padding:"15px",backgroundColor:"lightskyblue"}}>Update user</Link>
        <Link to='/delete' style={{padding:"15px",backgroundColor:"lightskyblue"}}>Delete user</Link>
        </div> <br /><br />
        

        <Routes>
          <Route path='/userlist' element={<Readuser data={data} />}/>
          <Route path='/' element={<Createuser data={data} setData={setData}/>}/>
          <Route path='/update' element={<Updateuser data={data} setData={setData}/>}/>
          <Route path='/delete' element={<Delete data={data} setData={setData}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App