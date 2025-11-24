import React from "react";
import BlueButton from "../elements/buttons";
import PrimaryDiv from "../elements/divs";
import "../../assets/css/elements/backgrounds.scss";

const Login = () => {
    return (
        <div className="login min-vh-100 d-flex flex-column justify-content-center
         align-items-center">
            <PrimaryDiv className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="w-75 mx-auto text-center">Sistema de Registro de Asistencias</h2>
                <BlueButton className="w-100" text="Iniciar sesión" type="submit" onClick="" />
            </PrimaryDiv>
        </div>
    );
}

export default Login;