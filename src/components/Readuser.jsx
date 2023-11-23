import React from 'react';

function Readuser({data}) {

    
  return (
    <div>
        <table>
           <thead>
           <tr>
            <th>User id</th> &nbsp;&nbsp;&nbsp;
            <th>Name</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>DOB</th>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Email</th>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Mobile number</th>
            </tr>
           </thead>
           <tbody>
            {data.map((value, index)=>{
              return <tr>
                <td>{index++}</td>&nbsp;&nbsp;&nbsp;
                <td>{value.addUserName}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>{value.addDob}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                <td>{value.addMailId}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                <td>{value.addMobileno}</td>
                
              </tr>
            })}
           </tbody>
        </table>
    </div>
  )
}

export default Readuser;