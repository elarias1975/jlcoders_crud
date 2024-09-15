import { useCallback, useRef, useState } from 'react'
import {v4} from 'uuid'


const initialState = {
  name:"",
  email:"",
  imgUrl:"",
  body:"",
};

function App() {


  const [dataForm,setDataForm] =useState(initialState);
  const [users,setUsers] = useState(  
[
  {
  
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "imgUrl":"https://randompicturegenerator.com/img/dog-generator/g99442cbd4e951ff69e7086fa4d26b258bd724db174492a2e621acb7edd2027fbb7c045d83d7bea73796a337514b0db49_640.jpg",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
  },
  {
  
  "id": 2,
  "name": "quo vero reiciendis velit similique earum",
  "email": "Jayne_Kuhic@sydney.com",
  "imgUrl":"https://randompicturegenerator.com/img/dog-generator/g99442cbd4e951ff69e7086fa4d26b258bd724db174492a2e621acb7edd2027fbb7c045d83d7bea73796a337514b0db49_640.jpg",
  "body": "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
  }]);

  const inputRef = useRef(null);
  
  const handleChange = useCallback((e) =>{
    setDataForm({...dataForm,[e.target.name]:e.target.value});
  },[dataForm]);

  const acciones = (e) => {
    e.preventDefault();
    crearUsuario();
  };

  const crearUsuario = () => {
    setUsers([...users,dataForm]);
    setDataForm(initialState);
    inputRef.current.focus();
  }

  return (
    <div>
      <form onSubmit={acciones}>
        
          {/*input del name */}
        <div className='mb-3'>
          <input 
          ref= {inputRef}
          type="text" 
          name="name" 
          placeholder='Ingrese el nombre'
          value={dataForm.name}
          required
          autoFocus
          onChange={(e)=>handleChange(e)}
          />
        </div>

        
          {/*input del email */}
        <div>
          <input 
          type="email" 
          name="email" 
          placeholder='Ingrese el email'
          value={dataForm.email}
          required
          autoFocus
          onChange={(e)=>handleChange(e)}
          autoComplete='off'
           />
        </div>
        {/* input del url_img */}
        <div>
          <input 
          type="text" 
          name="imgUrl" 
          placeholder='Ingrese la url'
          value={dataForm.imgUrl}
          required
          autoFocus
          onChange={(e)=>handleChange(e)}
           />
        </div>
        {/* input del body*/}
        <div>
          <input 
          type="text" 
          name="body" 
          placeholder='Ingrese el body'
          value={dataForm.body}
          required
          autoFocus
          onChange={(e)=>handleChange(e)}
           />
        </div>
        <button>Guardar</button>
      </form>
      {/** Tabla para mostrar los usuarios */}
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>imgUrl</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td> 
                  <td><img className="img-fluid" width="420" src={user.imgUrl}></img></td>
                  <td>{user.body}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
