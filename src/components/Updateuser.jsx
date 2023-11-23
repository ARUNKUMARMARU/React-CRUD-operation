import React, { useState } from 'react';

function Updateuser({ data, setData }) {
  const [selectedData, setSelectedData] = useState(null);
  const [id, setId]= useState(null);

  const [updatedName,setUpdatedName] = useState()
  const [updatedDob,setUpdatedDob] = useState('')
  const [updatedMailId,setUpdatedMailId] = useState('')
  const [updatedMobileno,setUpdatedMobileno] = useState('')

  const addUpdatedUser = (event)=>{
    event.preventDefault();
    console.log(data)
    let a=structuredClone(data)
    a[id]={addUserName:updatedName,addDob:updatedDob,addMailId:updatedMailId,addMobileno:updatedMobileno}

    setData(a)

    setUpdatedName('')
    setUpdatedDob('')
    setUpdatedMailId('')
    setUpdatedMobileno('')
  }

//console.log(data)
  const handleSelectChange = (event) => {
    //console.log(event.target.value); 
    setId(event.target.value)
    const select = data[event.target.value]
    //console.log(select)
   setSelectedData(select)
   setUpdatedName(select.addUserName);
    setUpdatedDob(select.addDob);
    setUpdatedMailId(select.addMailId);
    setUpdatedMobileno(select.addMobileno);

    //setData(event.target.value);
    };
       
  return (
    <div>
      <div>
        <label>
          Select Id &nbsp;

          <select onChange={handleSelectChange}>

            <option value="">Select...</option>

            {data.map((option, index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}

          </select>
        </label> 
      </div>
      <div>
      </div>
      {
        selectedData&&
        <div><form onSubmit={addUpdatedUser}>
        <div style={{ paddingTop: "20px" }}>
          
        <label >
            Name &nbsp;&nbsp;
        <input onChange={(event)=>setUpdatedName(event.target.value)} value={updatedName} />
        </label> <br /> <br />
   
        <label > 
            Date of birth &nbsp;&nbsp;
        <input type='date' onChange={(event)=>setUpdatedDob(event.target.value)} value={updatedDob}/>
        </label> <br /> <br />
   
        <label >
           Mail id &nbsp;
        <input type='email' onChange={(event)=>setUpdatedMailId(event.target.value)} value={updatedMailId}/>
        </label> <br /> <br />
   
        <label>
           Mobile number &nbsp;
        <input onChange={(event)=>setUpdatedMobileno(event.target.value)} value={updatedMobileno}/>
        </label> <br /><br />
   
       <div style={{paddingLeft:"80px"}}>
       <button type='submit'>update</button>
       </div>
      
    </div>
        </form></div>
      }
    </div>
  )
}

export default Updateuser;