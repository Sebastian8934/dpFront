import React,{ useState,useEffect } from 'react'

//Component
import Navbar from '../../../component/navbar/Navbar';
import Footer from '../../../component/footer/Footer';

//Views
import CreateUser from '../create/CreateUser';
import UpdateUser from '../update/UpdateUser';

//Redux
import { useDispatch } from 'react-redux';

//Action
import { usersAllService,deleteUserService } from '../../../store/action/userAction';

function ListUser() {

  const ListArrayHeader = [
    {colum0:"#",colum1:"Cedula",colum2:"Nombres",colum3:"Apellidos",colum4:"Telefono",colum5:"Correo",columEdit:"Actualizar",columDelete:"Eliminar"}
  ]

  const dispatch = useDispatch();
  const [listArrayInfo, setListArrayInfo] = useState([]);

  // Navigate
  const [showView, setShowView] = useState({
    listView:true,
    createView:false,
    updateView:false
  });

  useEffect(() => {
    const funcList =  async () => {
      let result = await dispatch(usersAllService());
      console.log(result.response);
      setListArrayInfo(result.response);
    }
    funcList();
  }, [dispatch,showView])
  

  // Funciones
  const createUser = () => {
    setShowView({createView:true})
  }

  const updateUser = (id,item) => {
    console.log(id);
    console.log(item);
  }

  const deleteUser = async (id) => {
    let responseResult = await dispatch(deleteUserService(id));
    console.log(responseResult);
    
    if (responseResult.response.status === 200) {
      alert("Se elimino con exito");
    } else {
      alert("Ocurrio un problema");
    }

    setShowView({listView:true});
  }

  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      { showView.listView === true ? 
          <div className='container py-5'>
          <div>
            <h1 className='text-center'>Lista de usuarios registrados</h1>
          </div>
          <div className='py-5'>
            <button onClick={createUser} className='btn btn-primary'>Crear un usuario</button>
          </div>
          <table className="table table-striped table-hover">
              <thead>
                {ListArrayHeader.map((item,index) => 
                  <tr key={index}>
                    <th scope="col">{item.colum0}</th>
                    <th scope="col">{item.colum1}</th>
                    <th scope="col">{item.colum2}</th>
                    <th scope="col">{item.colum3}</th>
                    <th scope="col">{item.colum4}</th>
                    <th scope="col">{item.colum5}</th>
                    <th scope="col">{item.columEdit}</th>
                    <th scope="col">{item.columDelete}</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {listArrayInfo.map((item,index) =>
                  <tr key={index+item.dni}>
                    <td>{index}</td>
                    <td>{item.dni}</td>
                    <td>{item.name}</td>
                    <td>{item.surName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>
                      <button type='button' onClick={() => updateUser(item._id,item)} className='btn btn-success'>Editar</button>
                    </td>
                    <td>
                      <button type='button' onClick={() => deleteUser(item._id)} className='btn btn-danger'>Eliminar</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
        </div> 
        : showView.createView === true ? <CreateUser setShowView={setShowView} /> 
        : showView.updateView === true ? <UpdateUser setShowView={setShowView} />
        : <></>
      }

      {/* Footer */}
      <Footer />
    </>
  )
}

export default ListUser