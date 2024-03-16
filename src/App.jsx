import Login from "./components/layouts/Login"

function App() {
let usuario ='Felipe'
let contraseña = '12345'

  return (
    <>
      <div>
        <Login usuario = {usuario} contraseña = {contraseña}/>
      </div>
    </>
    
    )
}

export default App


