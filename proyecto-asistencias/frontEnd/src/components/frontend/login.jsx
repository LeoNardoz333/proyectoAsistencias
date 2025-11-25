import React from "react";
import BlueButton from "../elements/buttons";
import PrimaryDiv from "../elements/divs";
import * as inputs from "../elements/inputs";
import "../../assets/css/elements/imgs.scss";
import usuarioIcon from "../../icons/usuario.png";
import "../../assets/css/elements/backgrounds.scss";
import "../../assets/css/elements/texts.scss";

const Login = () => {
    return (
        <div className="login min-vh-100 d-flex flex-column justify-content-center
         align-items-center">
            <PrimaryDiv className="d-flex flex-column justify-content-center align-items-center">
                <img src={usuarioIcon} alt="login icon" className="login-icon" />
                <h2 className="titulo-login">Sistema de Registro de Asistencias</h2>
                <inputs.TextInput
                    placeholder="Correo electrónico"
                    className="imput-text mb-3"/>
                <inputs.PasswordInput
                    placeholder="Contraseña"
                    className="imput-text mb-4"/>
                <BlueButton className="w-100" text="Iniciar sesión" type="submit" onClick="" />
            </PrimaryDiv>
        </div>
    );
}

export default Login;