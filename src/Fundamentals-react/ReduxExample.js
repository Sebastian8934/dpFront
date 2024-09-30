import React,{ useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { usersReducer } from '../store/action/exampleAction';

function ReduxExample() {

  const dispatch = useDispatch();
  const [listUsers, setListUsers] = useState([]);
  const list = useSelector((state) => state.exampleReducer);

  /* Actualiza de manera automatica */ 
  useEffect(() => {
    setListUsers(list.data);
  }, [list])
  
  /* Actualiza con un click */ 
  const handleUsers = () => {
    setListUsers(list.data);
    console.log(list.data);
  }
  
  /* Actualiza con un click */ 
  const handleClick = async () => {
    await dispatch(usersReducer());
  }

  return (
    <>
      <button type='button' onClick={handleClick}>Cargar</button>
      <button type='button' onClick={handleUsers}>Mostrar datos</button>


      <div>
        {listUsers.map((item,index) => 
           <p key={index}>{item.email}</p>
        )}
      </div>

    </>
  )
}

export default ReduxExample