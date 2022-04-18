import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    return (

        <div>
            {store.respuesta.token ?
                <div>
                    <h1>Pagina de usuario registrado</h1>
                    <div className="jumbotron  px-4 py-5 my-3 rounded-3">
                        <div className="text-center">
                            <h3>Bienvenido a ENJOY&RIDE,tu portal de<br />
                                alquiler de motos  para  disfrutar estés donde<br />
                                estés de lo que más te gusta montar en moto </h3>

                        </div>



                    </div>

                    <Link to="/registroMoto">
                        <button className="btn btn-light ">Registrar Moto</button>
                    </Link>
                </div>
                : <Redirect to="/login" />
            }
        </div>
    )

}