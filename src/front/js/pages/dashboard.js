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

                    <div className="container-fluid">
                        <h1 className="text-center mt-5 border-bottom">Ficha de Usuario</h1>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div className="container " >
                                <form className="row g-3">
                                    <div className="col-md-5">
                                        <label htmlFor="inputEmail5" className="form-label text"><strong>Nombre:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom " id="staticEmail" value={store.respuesta.nombre} />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Apellidos:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.apellidos} />

                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="inputEmail5" className="form-label text"><strong>Email:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.email} />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Teléfono:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.telefono} />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="inputEmail5" className="form-label text"><strong>Dirección:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.direccion} />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Permiso:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={store.respuesta.license} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center mt-5 border-bottom">Mis motos</h2>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/registroMoto">
                            <button className="btn btn-secondary  "><strong>+ </strong>Añadir moto</button>
                        </Link>
                    </div>

                    <div className="container mt-5 jsutify-content-center">

                        <div className="card-group ">
                            <div className=" row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-nowrap overflow-auto">
                                <MotoCardUser />
                            </div>
                        </div>
                    </div>



                </div>
                : <Redirect to="/login" />
            }
        </div>
    )

}