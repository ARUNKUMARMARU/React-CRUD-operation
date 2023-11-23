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
        <form onSubmit={addNewUser}>
        <div style={{ paddingTop: "20px" }}>
          
        <label >
            Name &nbsp;&nbsp;
        <input onChange={(event)=>setAddUserName(event.target.value)} value={addUserName}></input> 
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