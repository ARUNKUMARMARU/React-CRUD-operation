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
          <Link to='/'>List users</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/create">Create user</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/update">Update user</Link>&nbsp; &nbsp; &nbsp;
        <Link to='/delete'>Delete user</Link>
        </div>
        <hr></hr>

        <Routes>
          <Route path='/' element={<Readuser data={data} />}/>
          <Route path='/create' element={<Createuser data={data} setData={setData}/>}/>
          <Route path='/update' element={<Updateuser data={data} setData={setData}/>}/>
          <Route path='/delete' element={<Delete data={data} setData={setData}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App