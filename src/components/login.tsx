import { useState } from "react";
import * as API from "../services/data";
import image from "../assets/login.png";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [teacher, setTeacher] = useState({usuario: "", password: ""});
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await API.login(teacher.usuario, teacher.password);
        if(response.includes("Bienvenido")) {
            navigate("/dashboard");
        }
        else {
            alert("Error");
        }
    }

    return (
        <>
            <img src={image} alt="login" style={{ width: '80px' }}/>
            <h2>Login</h2>
            <form id="formulario" onSubmit={handleSubmit}>
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="usuario" name="usuario" onChange={event => setTeacher({...teacher, usuario: event.target.value})} /><br></br><br></br>
                <label htmlFor="pass">Contraseña</label>
                <input type="password" id="pass" name="password" onChange={event => setTeacher({...teacher, password: event.target.value})} /><br></br><br></br>
                <input type="submit" id="enviar" value="Ingresar" />
            </form>
        </>
    )
}
