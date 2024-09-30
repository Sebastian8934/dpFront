import React, { Component } from 'react';

class Component1 extends Component {
  render() {
    return (
      <div>Componente de clase</div>
    )
  }
}

function Component2() {
  return (
    <div>Componente funcional</div>
  )
}

function ComponentExample() {
  return (
    <>
        <Component1 />
        <Component2 />
    </>
  )
}

export default ComponentExample