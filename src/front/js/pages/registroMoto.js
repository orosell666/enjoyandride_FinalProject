import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";


export const RegisterMoto = () => {
    const { actions, store } = useContext(Context);
    const [moto, setMoto] = useState({})
    const [files, setFiles] = useState(null);

    const Register = () => {
        const formData = new FormData();

        for (var key in moto) {
            formData.append(key, moto[key]);
        }
        formData.append("file", files[0]);
        actions.generateMoto(formData);
    };
    let history = useHistory();


    const changeData = e => {
        setMoto({ ...moto, [e.target.name]: e.target.value })
    }


    return (
        <div className="container mt-5">
            {store.respuesta.token ?

                <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="exampleDataList" className="form-label text ">Marca *</label>
                        <input className="form-control text-muted " aria-label="Default select example" name="marca_id" onChange={(e) => changeData(e)}>


                        </input>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Modelo *</label>
                        <input className="form-control text-muted" aria-label="Default select example" name="modelo_id" onChange={(e) => changeData(e)}>
                        </input>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Potencia *</label>
                            <select className="form-select text-muted" aria-label="Default select example" name="power" onChange={(e) => changeData(e)}>
                                <option selected >Selecciona Potencia</option>
                                <option value="1">500 o más</option>
                                <option value="2">250</option>
                                <option value="3">125</option>

                            </select>
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Precio por día *</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="priceday" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Precio por semana *</label>
                            <input type="text" className="form-control" placeholder="" aria-label="First name" name="priceweek" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Descuento Fin de semana</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="discount_weekend" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-labe text">Descuento por semana</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="First name" name="discount_week" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Comentarios</label>
                            <input type="text" className="form-control text-muted" placeholder="moto nueva, con accesorios, ..." aria-label="Last name" name="comment" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Provincia *</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="First name" name="provincia" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Ciudad *</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="ciudad" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Email de contacto *</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="First name" name="email" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Teléfono de contacto *</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="telefono" onChange={(e) => changeData(e)} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Tipo *</label>
                            <select className="form-select text-muted" aria-label="Default select example" name="tipo_id" onChange={(e) => changeData(e)}>
                                <option selected >Selecciona Tipo</option>
                                <option value="1">Naked</option>
                                <option value="2">Trail</option>
                                <option value="3">Custom</option>
                                <option value="4">R-style</option>
                                <option value="5">Scooter</option>

                            </select>
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Matricula *</label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="matricula" onChange={(e) => changeData(e)} />
                        </div>
                    </div>



                    <div className=" col mb-3 mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Imágenes *</label>
                        <input type="file" className="form-control text-muted" id="inputGroupFile02" onChange={(e) => setFiles(e.target.files)} />

                    </div>

                    <div className="d-flex justify-content-center mt-5">



                        <button type="button" className="btn btn-secondary" onClick={() => {
                            Register()


                        }}>Añadir moto</button></div>

                </div>
                : <Redirect to="/login" />
            } </div>


    )
}