import React from 'react';

function Readuser({data}) {

    
  return (
    <div>
      <div><h1 style={{textAlign:"center"}}>Users List</h1></div>
      <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}} >
      
        <table >
           <thead >
           <tr style={{backgroundColor:'grey'}}>
            <th style={{padding:"10px"}}>User id</th> 
            <th style={{padding:"20px"}}>Name</th> 
            <th style={{padding:"10px"}}>DOB</th>
            <th style={{padding:"10px"}}>Email</th>
            <th style={{padding:"10px"}}>Mobile number</th>
            </tr>
           </thead>
           <tbody>
            {data.map((value, index)=>{
              return <tr>
                <td style={{padding:"10px"}}>{index+1}</td>
                <td style={{padding:"10px"}}>{value.addUserName}</td>
                <td style={{padding:"10px"}}>{value.addDob}</td>
                <td style={{padding:"10px"}}>{value.addMailId}</td>
                <td style={{padding:"10px"}}>{value.addMobileno}</td>
                
              </tr>
            })}
           </tbody>
        </table>
    </div>
    </div>
  )
}

export default Readuser;