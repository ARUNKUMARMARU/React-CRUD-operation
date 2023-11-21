import React, { useState } from 'react';

function Createuser() {
  
    const [addUserId, setAddUserId] = useState('');
    const [addUserName, setAddUserName] = useState('');
    const [addDob, setAddDob] = useState('');
    const [addMailId, setAddMailId] = useState('');
    const [addMobileno, setAddMobileno] = useState('');
   
    const addNewUser = (event)=> {
      event.preventDefault();
      console.log(addUserId, addDob, addMobileno)
    }

  return (

    <div>
        <form onSubmit={addNewUser}>
        <div style={{ paddingTop: "20px" }}>
        <label >
           User Id &nbsp;&nbsp;
        <input onChange={(event)=>setAddUserId(event.target.value)} value={addUserId}/>
        </label> <br /> <br />

        <label >
            Name &nbsp;&nbsp;
        <input onChange={(event)=>setAddUserName(event.target.value)} value={addUserName} />
        </label> <br /> <br />

        <label >
            Date of birth &nbsp;&nbsp;
        <input type='date' onChange={(event)=>setAddDob(event.target.value)} value={addDob}/>
        </label> <br /> <br />

        <label >
           Mail id &nbsp;
        <input type='email' onChange={(event)=>setAddMailId(event.target.value)} value={addMailId}/>
        </label> <br /> <br />

        <label>
           Mobile number &nbsp;
        <input onChange={(event)=>setAddMobileno(event.target.value)} value={addMobileno}/>
        </label> <br /><br />

       <div style={{paddingLeft:"80px"}}>
       <button type='submit'>submit</button>
       </div>
      
    </div>
        </form>
    </div>
  )
}

export default Createuser;