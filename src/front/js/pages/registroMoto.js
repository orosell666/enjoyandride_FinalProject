import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Upload } from "../component/uploadimages";

export const RegisterMoto = () => {
    const { actions, store } = useContext(Context);
    const [moto, setMoto] = useState({})
    let history = useHistory();


    const changeData = e => {
        setMoto({ ...moto, [e.target.name]: e.target.value })
    }


    return (
        <div className="container mt-5">
            {store.respuesta.token ?
                <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label">Marca</label>
                        <select className="form-select" aria-label="Default select example" name="marca_id" onChange={(e) => changeData(e)}>
                            <option selected >Selecciona Marca</option>
                            <option value="1">HOnda</option>

                        </select>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label">Modelo</label>
                        <select className="form-select" aria-label="Default select example" name="modelo_id" onChange={(e) => changeData(e)}>
                            <option selected >Selecciona Modelo</option>
                            <option value="1">HOnda</option>

                        </select>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="form-label">Potencia</label>
                            <select className="form-select" aria-label="Default select example" name="power" onChange={(e) => changeData(e)}>
                                <option selected >Selecciona Potencia</option>
                                <option value="1">500 o más</option>
                                <option value="2">250</option>
                                <option value="3">125</option>

                            </select>
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Precio por día</label>
                            <input type="text" className="form-control" placeholder="" aria-label="Last name" name="priceday" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Precio por semana</label>
                            <input type="text" className="form-control" placeholder="" aria-label="First name" name="priceweek" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Descuento Fin de semana</label>
                            <input type="text" className="form-control" placeholder="" aria-label="Last name" name="discount_weekend" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Descuento por semana</label>
                            <input type="text" className="form-control" placeholder="" aria-label="First name" name="discount_week" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Comentarios</label>
                            <input type="text" className="form-control" placeholder="moto nueva, con accesorios, ..." aria-label="Last name" name="comment" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Provincia</label>
                            <input type="text" className="form-control" placeholder="" aria-label="First name" name="provincia" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" placeholder="" aria-label="Last name" name="ciudad" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">latitud</label>
                            <input type="text" className="form-control" placeholder="" aria-label="First name" name="latitud" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">longitud</label>
                            <input type="text" className="form-control" placeholder="" aria-label="Last name" name="longitud" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">Tipo</label>
                            <select className="form-select" aria-label="Default select example" name="tipo_id" onChange={(e) => changeData(e)}>
                                <option selected >Selecciona Tipo</option>
                                <option value="1">HOnda</option>

                            </select>
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label">matricula</label>
                            <input type="text" className="form-control" placeholder="" aria-label="Last name" name="matricula" onChange={(e) => changeData(e)} />
                        </div>
                    </div>






                    <button type="button" className="btn btn-primary mt-5" onClick={() => {
                        actions.generateMoto(moto)

                    }}>Enviar</button>

                </div>
                : <Redirect to="/login" />
            } </div>


    )
}