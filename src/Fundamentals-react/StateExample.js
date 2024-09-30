import React,{ useState } from 'react';

function StateExample() {

    const [counter, setCounter] = useState(0);

    const counterSum = () => {
        setCounter(counter +1)
    }

  return (
    <>
        <div>
            <p>El contador es: {counter}</p>
        </div>
        <div>
            <button type='button' onClick={counterSum}>Contador +1</button>
        </div>
    </>
  )
}

export default StateExample