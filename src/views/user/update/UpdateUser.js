import React from 'react'

function UpdateUser({setShowView}) {

  const listReturn = () => {
    setShowView({listView:true})
  }

  return (
    <>
        <button onClick={listReturn}>Regresar</button>
    </>
  )
}

export default UpdateUser