import { useState } from "react";
import * as API from "../services/data";
import { useNavigate } from "react-router-dom";
import '../css/login.css'; 

export function Login() {
    const [teacher, setTeacher] = useState({usuario: "", password: ""});
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await API.login(teacher.usuario, teacher.password);
        if(response.length > 0) {
            sessionStorage.setItem("user", teacher.usuario);
            navigate("/dashboard");
        }
        else {
            alert("Error");
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" id="formulario" onSubmit={handleSubmit}>
                <label htmlFor="usuario">Usuario</label>
                <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    onChange={event => setTeacher({...teacher, usuario: event.target.value})}
                />
                <label htmlFor="pass">Contraseña</label>
                <input
                    type="password"
                    id="pass"
                    name="password"
                    onChange={event => setTeacher({...teacher, password: event.target.value})}
                />
                <input type="submit" id="enviar" value="Ingresar" />
            </form>
        </div>
    );
}
