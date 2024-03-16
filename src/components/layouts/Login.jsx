import BotonAtrás from "./BotonAtrás"
import BotonSiguiente from "./BotonSiguiente"
import Correo from "./Correo"

const Login = ({usuario, }) => {
    return (
        <form>
           <Correo />
            <br />
    
            <p>¿No tiene una cuenta?Cree una.</p>
            <p className="letra">¿No puede acceder a cuenta?.</p>
            <BotonAtrás/>
            <BotonSiguiente/>
        </form>
    )
}
export default Login
