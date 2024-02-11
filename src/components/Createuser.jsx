import React, { useState } from 'react';

function Createuser({data, setData}) {
  
    const [addUserName, setAddUserName] = useState('');
    const [addDob, setAddDob] = useState('');
    const [addMailId, setAddMailId] = useState('');
    const [addMobileno, setAddMobileno] = useState('');
   
    const addNewUser = (event)=> {
      event.preventDefault();
      //console.log(addUserId, addDob, addMobileno)
      setData([...data, {addUserName, addDob, addMailId, addMobileno}])
      
      setAddUserName('')
      setAddDob('')
      setAddMailId('')
      setAddMobileno('')
    }

  return (

    <div>
      <h1>Create User</h1>
        <form onSubmit={addNewUser}>
        <div style={{ paddingTop: "20px" }}>
          
        <label >
            Name &nbsp;&nbsp;
        <input onChange={(event)=>setAddUserName(event.target.value)} value={addUserName} placeholder='Enter name...'></input> 
        </label> <br /> <br />

        <label >
            Date of birth &nbsp;&nbsp;
        <input type='date' onChange={(event)=>setAddDob(event.target.value)} value={addDob}/>
        </label> <br /> <br />

        <label >
           Mail id &nbsp;
        <input type='email' placeholder='Enter email...' onChange={(event)=>setAddMailId(event.target.value)} value={addMailId}/>
        </label> <br /> <br />

        <label>
           Mobile number &nbsp;
        <input type="tel" minLength={10} maxLength={10} onChange={(event)=>setAddMobileno(event.target.value)} value={addMobileno} placeholder='10digits' />
        </label> <br /><br />

       <div >
       <button style={{padding:"10px", backgroundColor:'blue', color:'white'}} type='submit'>submit</button>
       </div>
      
    </div>
        </form>
    </div>
  )
}

export default Createuser;