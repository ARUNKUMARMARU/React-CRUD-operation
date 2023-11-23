import React, { useState } from 'react'

function Delete(data, setData) {
  const [selectedId, setSeletedId] = useState(null)

  const [selectName, setSelectName] = useState("")
  const [selectDob, setSelectDob] = useState("")
  const [selectMailId, setSelectMailId] = useState("")
  const [selectMobileno, setSelectMobileno] = useState("")

  const deleteUser = (e)=>{
    e.preventDefault();
    let a=structuredClone(data)
    a[selectedId] = [addUserName(""), addDob(""), addMailId(""), addMobileno("")]
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
        <label>
          Select id &nbsp;
          <select onChange={handlerDeleteUser}>
            <option value="">select...</option>

            {data.map((option, index) => (
              <option key={index} value={index}>
                {index}
              </option>

            ))}
          </select>
          &nbsp;
        </label>
      </div>
      <div>
        <form onSubmit={deleteUser}>
        <button type='submit'>delete</button>
        </form>
      </div>
    </div>
  )
}

export default Delete