import React from 'react'
import Createuser from './components/Createuser';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Updateuser from './components/Updateuser';
import Readuser from './components/Readuser';
import Delete from './components/Delete';

function App() {
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
          <Route path='/' element={<Readuser/>}/>
          <Route path='/create' element={<Createuser/>}/>
          <Route path='/update' element={<Updateuser/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App