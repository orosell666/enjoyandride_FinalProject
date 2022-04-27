import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = () => {
    const { actions, store } = useContext(Context);
    const [user, setUser] = useState({})
    let history = useHistory();


    const changeData = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container">
                <img className="img-fluid" src="https://res.cloudinary.com/orosell666/image/upload/c_fill,g_auto,h_456,w_1296/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,/v1650490129/a8vcjheho6e7mms0zebz.jpg" /></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Email</label>
                        <input type="text" className="form-control text-mute" placeholder="name@web.com" aria-label="First name" name="email" onChange={(e) => changeData(e)} />
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Contraseña</label>
                        <input type="text" className="form-control text-mute" placeholder="Contraseña" aria-label="Last name" name="password" onChange={(e) => changeData(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Nombre</label>
                        <input type="text" className="form-control text-mute" placeholder="Nombre" aria-label="First name" name="name" onChange={(e) => changeData(e)} />
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Apellidos</label>
                        <input type="text" className="form-control text-mute" placeholder="Apellidos" aria-label="Last name" name="lastName" onChange={(e) => changeData(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Teléfono</label>
                        <input type="text" className="form-control text-mute" placeholder="+34 666666666" aria-label="First name" name="phonenumber" onChange={(e) => changeData(e)} />
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Carnet de Conducir</label>
                        <input type="text" className="form-control text-mute" placeholder="A, A-1, A-2" aria-label="Last name" name="license" onChange={(e) => changeData(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Fecha de Nacimiento</label>
                        <input type="text" className="form-control text-mute" placeholder="dd/mm/yyyy" aria-label="First name" name="birthdate" onChange={(e) => changeData(e)} />
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Dirección</label>
                        <input type="text" className="form-control text-mute" placeholder="C/ Unica 23, 0000, Ciudad, Provincia" aria-label="Last name" name="adress" onChange={(e) => changeData(e)} />
                    </div>
                </div>
                <button type="button" className="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                    actions.generateRegister(user)

                }}>Enviar</button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text" id="staticBackdropLabel">Gracias por registrarte!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text">
                                Ahora es el momento de registrar tus motos y empezar a ganar billetes
                            </div>
                            <div className="modal-footer">
                                <Link to="/login">
                                    <button type="button" className="btn btn-primary text">Login</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div></div>


    )
}