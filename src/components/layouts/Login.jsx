import BotonAtrás from "./BotonAtrás"
import BotonSiguiente from "./BotonSiguiente"

const Login = ({usuario, }) => {
    return (
        <form>
            <input value={usuario} type="text" />
            <br />
            <BotonAtrás/>
            <BotonSiguiente/>
        </form>
    )
}
export default Login
