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
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{store.respuesta.nombre}</th>
                                <td>{store.respuesta.apellidos}</td>
                                <td>{store.respuesta.email}</td>
                                <td>{store.respuesta.telefono}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to="/registroMoto">
                        <button className="btn btn-light ">Registrar Moto</button>
                    </Link>
                </div>
                : <Redirect to="/login" />
            }
        </div>
    )

}