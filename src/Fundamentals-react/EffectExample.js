import React, { useEffect, useState } from 'react'

function EffectExample() {

    const [value, setValue] = useState("Esperando el cambio");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      
        if (counter > 0) {
            setValue("Hubo un cambio con el useEffect");
        }
      
    }, [counter])
    
    const changeEffect = () => {
        setCounter(counter + 1);
    }

  return (
    <>
        <p>{value}</p>
        <button onClick={changeEffect}>Click</button>
    </>
  )
}

export default EffectExample