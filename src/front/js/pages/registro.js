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
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="name@web.com" aria-label="First name" name="email" onChange={(e) => changeData(e)} />
                </div>
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Contraseña</label>
                    <input type="text" className="form-control" placeholder="Contraseña" aria-label="Last name" name="password" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" name="name" onChange={(e) => changeData(e)} />
                </div>
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" name="lastName" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" placeholder="+34 666666666" aria-label="First name" name="phonenumber" onChange={(e) => changeData(e)} />
                </div>
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Carnet de Conducir</label>
                    <input type="text" className="form-control" placeholder="A, A-1, A-2" aria-label="Last name" name="license" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Fecha de Nacimiento</label>
                    <input type="text" className="form-control" placeholder="dd/mm/yyyy" aria-label="First name" name="birthdate" onChange={(e) => changeData(e)} />
                </div>
                <div className="col mt-2">
                    <label htmlFor="formGroupExampleInput" className="form-label">Dirección</label>
                    <input type="text" className="form-control" placeholder="C/ Unica 23, 0000, Ciudad, Provincia" aria-label="Last name" name="adress" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <button type="button" className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                actions.generateRegister(user)

            }}>Enviar</button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Gracias por registrarte!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Ahora es el momento de registrar tus motos y empezar a ganar billetes
                        </div>
                        <div className="modal-footer">
                            <Link to="/login">
                                <button type="button" className="btn btn-primary">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}