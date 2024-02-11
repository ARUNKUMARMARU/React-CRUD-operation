import React, { useState } from 'react'


function Delete({data, setData}) {
  const [selectedId, setSeletedId] = useState(null)

  const [selectName, setSelectName] = useState("")
  const [selectDob, setSelectDob] = useState("")
  const [selectMailId, setSelectMailId] = useState("")
  const [selectMobileno, setSelectMobileno] = useState("")

  const deleteUser = (e)=>{
    e.preventDefault();
    let a=structuredClone(data)
    console.log(a);
    a[selectedId] = {addUserName:"", addDob:"", addMailId:"", addMobileno:""}
    setData(a)
  }

  const handlerDeleteUser = (event) => {
    setSeletedId(event.target.value)
    const selectedData = data[event.target.value]
    setSelectName(selectedData.addUserName)
    setSelectDob(selectedData.addDob)
    setSelectMailId(selectedData.addMailId)
    setSelectMobileno(selectedData.addMobileno)
  }
  return (
    <div>
      <div>
        <h1>Delete User</h1>
        <label>
          Select Userid to delete : &nbsp;
          <select onChange={handlerDeleteUser}>
            <option value="">select...</option>

            {data && data.map((option, index) => (
              <option key={index} value={index}>
                {index}
              </option>

            ))}
          </select>
          &nbsp;
        </label>
      </div>
      <div>
        <form onSubmit={deleteUser}> <br />
        <button style={{backgroundColor:"red", padding:'8px'}} type='submit'>delete</button>
        </form>
      </div>
    </div>
  )
}

export default Delete