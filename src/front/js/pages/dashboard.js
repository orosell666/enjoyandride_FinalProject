import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MotoCardUser } from "../component/usermotocard";


export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    return (

        <div>
            {store.respuesta.token ?
                <div>

                    <div className="container">
                        <h1 className="text-center mt-5 border-bottom">Ficha de Usuario</h1>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div >
                                <div className="d-grid gap-3 ">
                                    <div class="mb-3 row g-3 ">
                                        <label for="staticEmail" className="col-sm-2 col-form-label text "><strong>Nombre:</strong></label>
                                        <div className="col-sm-10 ">
                                            <input type="text" readonly className="form-control-plaintext border-bottom " id="staticEmail" value={store.respuesta.nombre} />
                                        </div>
                                        <label for="staticEmail" className="col-sm-2 col-form-label text"><strong>Teléfono:</strong></label>
                                        <div className="col-sm-10">
                                            <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.telefono} />
                                        </div>
                                        <label for="staticEmail" class="col-sm-2 col-form-label text"><strong>Dirección:</strong></label>
                                        <div className="col-sm-10">
                                            <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.direccion} />
                                        </div>
                                    </div></div>

                            </div>
                            <div className="ms-5">
                                <div className="d-grid gap-3">
                                    <div className="mb-3 row g-3">
                                        <label for="staticEmail" className="col-sm-2 col-form-label text"><strong>Apellidos:</strong></label>
                                        <div className="col-sm-10">
                                            <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.apellidos} />
                                        </div>
                                        <label for="staticEmail" className="col-sm-2 col-form-label text"><strong>Email:</strong></label>
                                        <div className="col-sm-10">
                                            <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.email} />
                                        </div>
                                        <label for="staticEmail" className="col-sm-2 col-form-label text"><strong>Licencia:</strong></label>
                                        <div className="col-sm-10">
                                            <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.license} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/registroMoto">
                            <button className="btn btn-secondary  ">Añadir moto</button>
                        </Link>
                    </div>
                    <div className="container mt-5">
                        <div className="col-md">
                            <div className="card-group">
                                <MotoCardUser />
                            </div></div></div>


                </div>
                : <Redirect to="/login" />
            }
        </div>
    )

}