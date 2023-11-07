import React from 'react';

function Createuser() {

  return (
    <div>
        <form type="submit">
        <div style={{ paddingTop: "20px" }}>
        <label >
           User Id &nbsp;&nbsp;
        <input />
        </label> <br /> <br />

        <label >
            Name &nbsp;&nbsp;
        <input />
        </label> <br /> <br />

        <label >
            Date of birth &nbsp;&nbsp;
        <input type='date'/>
        </label> <br /> <br />

        <label >
           Mail id &nbsp;
        <input type='email'/>
        </label> <br /> <br />

        <label>
           Mobile number &nbsp;
        <input />
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