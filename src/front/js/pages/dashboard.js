import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MotoCardUser } from "../component/usermotocard";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login")
        }
        actions.cargarMotosUser(localStorage.getItem("user_id"));
        infoUser()

    }, [])

    const infoUser = () => {
        fetch(process.env.BACKEND_URL + "/api/infouser", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
            .then((res) => res.json())
            .then((res) => setUser(res))
            .catch((error) => console.error(error));
    }

    return (

        <div>

            <div>

                <div className="container">
                    <h1 className="text-center mt-5 border-bottom">Ficha de Usuario</h1>
                    <div className="d-flex justify-content-evenly mt-5">
                        <div className="container " >
                            <form className="row g-3">
                                <div className="col-md-5 ms-5 ps-5">
                                    <label htmlFor="inputEmail5" className="form-label text"><strong>Nombre:</strong></label>
                                    <input type="text" readonly className="form-control-plaintext border-bottom " id="staticEmail" value={user.nombre ? user.nombre : ""} />
                                </div>
                                <div className="col-md-5 ms-4">
                                    <label htmlFor="inputPassword5" className="form-label text"><strong>Apellidos:</strong></label>
                                    <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={user.apellidos ? user.apellidos : ""} />

                                </div>
                                <div className="col-md-5 ms-5 ps-5">
                                    <label htmlFor="inputEmail5" className="form-label text"><strong>Email:</strong></label>
                                    <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={user.email ? user.email : ""} />
                                </div>
                                <div className="col-md-5 ms-4">
                                    <label htmlFor="inputPassword5" className="form-label text"><strong>Teléfono:</strong></label>
                                    <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={user.telefono ? user.telefono : ""} />
                                </div>
                                <div className="col-md-5 ms-5 ps-5">
                                    <label htmlFor="inputEmail5" className="form-label text"><strong>Dirección:</strong></label>
                                    <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={user.direccion ? user.direccion : ""} />
                                </div>
                                <div className="col-md-5 ms-4">
                                    <label htmlFor="inputPassword5" className="form-label text"><strong>Permiso:</strong></label>
                                    <input type="text" readonly className="form-control-plaintext border-bottom" id="staticEmail" value={user.license ? user.license : ""} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="text-center mt-5 border-bottom">Mis motos</h2>
                </div>
                <div className="container justify-content-center mt-3">
                    <div className="row g-3 ">
                        <Link to="/registroMoto">
                            <button type="button"
                                className="btn btn-success  col-3 "><strong>+ </strong>Añadir moto</button>
                        </Link>
                    </div></div>

                <div className="container mt-5 jsutify-content-center">

                    <div className="card-group ">
                        <div className=" row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-nowrap overflow-auto">
                            <MotoCardUser />
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )

}