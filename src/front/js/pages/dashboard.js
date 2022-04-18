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

                    <div className="container">
                        <h1 className="text-center mt-5">Ficha de Usuario</h1>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div >
                                <div className="d-grid gap-3 ">
                                    <div className="p-2 bg-light border rounded"><strong>Nombre:  </strong>{store.respuesta.nombre}</div>
                                    <div className="p-2 bg-light border rounded"><strong>Teléfono:  </strong>{store.respuesta.telefono}</div>
                                    <div className="p-2 bg-light border rounded"><strong>Dirección:  </strong>{store.respuesta.direccion}</div>
                                </div>

                            </div>
                            <div className="me-5">
                                <div className="d-grid gap-3">
                                    <div className="p-2 bg-light border rounded"><strong>Apellidos:  </strong>{store.respuesta.apellidos}</div>
                                    <div className="p-2 bg-light border rounded"><strong>Email:  </strong>{store.respuesta.email}</div>
                                    <div className="p-2 bg-light border rounded"><strong>Carnet:  </strong>{store.respuesta.license}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/registroMoto">
                            <button className="btn btn-secondary  ">Registrar Moto</button>
                        </Link>
                    </div>

                </div>
                : <Redirect to="/login" />
            }
        </div>
    )

}