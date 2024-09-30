import React from 'react'

function PropsExample1({ value }) {
  return (
    <div>{value}</div>
  )
}

function PropsExample() {
  return (
    <>
        <PropsExample1 value={"Ejemplo de las props"} />
    </>
  )
}

export default PropsExample