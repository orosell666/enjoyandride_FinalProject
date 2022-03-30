import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
    const { actions, store } = useContext(Context);
    const [user, setUser] = useState({})
    let history = useHistory();


    const changeData = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mt-5">
            <div class="row">
                <div class="col">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="text" class="form-control" placeholder="name@web.com" aria-label="First name" name="email" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Contraseña</label>
                    <input type="text" class="form-control" placeholder="Contraseña" aria-label="Last name" name="password" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="Nombre" aria-label="First name" name="name" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Apellidos</label>
                    <input type="text" class="form-control" placeholder="Apellidos" aria-label="Last name" name="lastName" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" placeholder="+34 666666666" aria-label="First name" name="phonenumber" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Carnet de Conducir</label>
                    <input type="text" class="form-control" placeholder="A, A-1, A-2" aria-label="Last name" name="license" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Fecha de Nacimiento</label>
                    <input type="text" class="form-control" placeholder="dd/mm/yyyy" aria-label="First name" name="birthdate" onChange={(e) => changeData(e)} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Dirección</label>
                    <input type="text" class="form-control" placeholder="C/ Unica 23, 0000, Ciudad, Provincia" aria-label="Last name" />
                </div>
            </div>
            <button type="button" class="btn btn-primary" >Enviar</button>

        </div>


    )
}