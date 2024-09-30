import React, { useState } from 'react'

//Redux
import { useDispatch } from 'react-redux';

//Action
import { usersCreateService } from '../../../store/action/userAction';

function CreateUser({setShowView}) {

  const dispatch = useDispatch();

  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = async () => {

    let body = {
      dni:dni,
      name:dni,
      surName:dni,
      phoneNumber:dni,
      email:email
    }

    let resultResponse = await dispatch(usersCreateService(body));

    if (resultResponse.status === 200) {
      alert("Su usuario se registro con exito");
    } else {
      alert("A ocurrido un error, no se pudo registrar");
    }
  }

  const listReturn = () => {
    setShowView({listView:true})
  }

  return (
    <>
      <div className='container py-5'>

        <div className='card'>
          <div className='card-body'>

            <div className='my-4'>
              <button className='btn btn-primary' onClick={listReturn}>Regresar</button>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Cedula</label>
              <input value={dni} onChange={(e) => setDni(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Cedula" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Nombres</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombres" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Apellidos</label>
              <input value={surName} onChange={(e) => setSurName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Apellidos" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Telefono</label>
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Telefono" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Correo" />
            </div>

            <div className="mb-3 text-center">
              <button onClick={handleClick} className='btn btn-primary' type='button'>Guardar</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CreateUser