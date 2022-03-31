import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const RegisterMoto = () => {
    const { actions, store } = useContext(Context);
    const [moto, setMoto] = useState({})
    let history = useHistory();


    const changeData = e => {
        setMoto({ ...moto, [e.target.name]: e.target.value })
    }
    return (
        <div className="container mt-5">
            <div class="row">
                <div class="col">
                    <label for="formGroupExampleInput" class="form-label">Potencia</label>
                    <input type="text" class="form-control" placeholder="500/100/250" aria-label="First name" name="email" onChange={(e) => changeData(e)} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Precio por día</label>
                    <input type="text" class="form-control" placeholder="" aria-label="Last name" name="password" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Precio por semana</label>
                    <input type="text" class="form-control" placeholder="" aria-label="First name" name="name" onChange={(e) => changeData(e)} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Descuento Fin de semana</label>
                    <input type="text" class="form-control" placeholder="" aria-label="Last name" name="lastName" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Descuento por semana</label>
                    <input type="text" class="form-control" placeholder="" aria-label="First name" name="phonenumber" onChange={(e) => changeData(e)} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Comentarios</label>
                    <input type="text" class="form-control" placeholder="moto nueva, con accesorios, ..." aria-label="Last name" name="license" onChange={(e) => changeData(e)} />
                </div>
            </div>
            <div class="row">
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Provincia</label>
                    <input type="text" class="form-control" placeholder="" aria-label="First name" name="birthdate" onChange={(e) => changeData(e)} />
                </div>
                <div class="col mt-2">
                    <label for="formGroupExampleInput" class="form-label">Ciudad</label>
                    <input type="text" class="form-control" placeholder="" aria-label="Last name" />
                </div>
            </div>

            <button type="button" class="btn btn-primary" onClick={() => {
                actions.generateMoto(moto)

            }}>Enviar</button>

        </div>


    )
}