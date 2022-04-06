import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {

    return (
        <div>
            <h1>Pagina de usuario registrado</h1>
            <Link to="/registroMoto">
                <button className="btn btn-light ">Registrar Moto</button>
            </Link>
        </div>

    )

}