import React from 'react'

  const styleCss = {

    formExampleContainerMain: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("funciona");
    
  }

function FormExample() {

  return (
    <>
      <div style={styleCss.formExampleContainerMain}>
        
          <form onSubmit={handleSubmit}>


            <button type="submit">Enviar</button>

          </form>

      </div>
    </>
  )
}

export default FormExample