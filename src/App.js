import React from 'react';
import shortid from 'shortid'

function App() {

  const [nombre,setnombre] = React.useState('')
  const [apellidos,setapellidos] = React.useState('')
  const [correo,setcorreo] = React.useState('')
  const [tel,settel] = React.useState('')
  const [editor,seteditor] = React.useState(false)
  const [id,setid] = React.useState('')
  const [error,seterror] = React.useState(null)



  const validaciones = () => {
    if(! nombre.trim() ){
      console.log(nombre);
      return
    }
    if(! apellidos.trim() ){
      console.log(apellidos);

      return
    }
    if(! correo.trim() ){
      console.log(correo);

      return
    }
    if(! tel.trim() ){
      console.log(tel);

      return
    }
  }

  const eliminarReg = id => {
    
    const arrayfiltrado  = listas.filter(item => item.id !== id )
    setlista(arrayfiltrado)
    
  }
    

  const editarReg = item => {
      console.log(item);
      seteditor(true)
      setnombre(item.nombres)
      setapellidos(item.apellido)
      setcorreo(item.email)
      settel(item.tel)
      setid(item.id)
      
  }

  const editarDator = (e) => {
    e.preventDefault()
    
    validaciones()
  
    const editado = listas.map( item => item.id === id ? {id:id, nombres:nombre,apellido:apellidos,email:correo,tel:tel} : item  )

    setlista(editado)
    seteditor(false)
    setnombre('')
    setapellidos('')
    setcorreo('')
    settel('')
    setid('')
  }

  const [listas,setlista] = React.useState([])


  const agregarNombre = (e) => {
    e.preventDefault()
    
   validaciones()
    

    setlista([
      ...listas,
      {id: shortid.generate() , nombres  : nombre , apellido: apellidos, email: correo , tel:tel}
    ])
    setnombre('')
    setapellidos('')
    setcorreo('')
    settel('')

  }
     return (
    <div className="container mt-5">
     <h1 className="text-center">Crud</h1>

     <hr />
       <div className="row">
           <div className="col-8">
             <h4 className="text-center"> Lista de registros</h4>
             <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">correo</th>
      <th scope="col">Telefono</th>
      <th scope="col">Operacion</th>
    </tr>
  </thead>
  <tbody>
  {
    listas.length === 0 ? (
      <td>No hay nigun registro</td>
    ) : (
    listas.map(item => (
    <tr key={item.id}>
      <td>{item.nombres}</td>
      <td>{item.apellido}</td>
      <td>{item.email}</td>
      <td>{item.tel}</td>
      <td>
        <button className="btn btn-danger btn-sm ml-2" onClick={()=> eliminarReg(item.id) }
        >
        Eliminar
        </button>
        <button className="btn btn-success btn-sm ml-2" onClick={() => editarReg(item)}
        >
        Editar
        </button>
      </td>
    </tr>

    ))
    )
  }
    
  </tbody>
</table>
         </div>
           <div className="col-4">
           <h4 className="text-center">{
             editor ? 'Editar registro' : 'Agregar registro'
             }</h4>
             <form onSubmit={ editor ?  editarDator : agregarNombre}>
               <input 
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese sus nombres"
                 onChange={e => setnombre(e.target.value)}
                 value={nombre}
               />
                <input 
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese sus apellidos"
                 onChange={e => setapellidos(e.target.value)}
                 value={apellidos}
               />
                <input 
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese su correo"
                 onChange={e => setcorreo(e.target.value)}
                 value={correo}
               />
               <input 
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese su numero telefonico  "
                 onChange={e => settel(e.target.value)}
                 value={tel}
               />

                {
                  editor ? (

               <button className="btn btn-primary btn-block" type="submit">Editar</button>
                  ) : (
                    
                <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                  ) 
                }
              
             </form>
           </div>
           
         
       </div>
    </div>
  );
}

export default App;
