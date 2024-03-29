import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";


export const RegisterMoto = () => {
    const { actions, store } = useContext(Context);
    const [moto, setMoto] = useState({})
    const [files, setFiles] = useState(null);
    const [modelos, setModelos] = useState([])
    const [marcas, setMarcas] = useState([])
    useEffect(() => {
        getModelos()
        getMarcas()
    }, [])
    const getModelos = () => {
        fetch(process.env.BACKEND_URL + "/api/modelo")
            .then((res) => res.json())
            .then((res) => setModelos(res))
            .catch((error) => console.error(error));
    }
    const getMarcas = () => {
        fetch(process.env.BACKEND_URL + "/api/marca")
            .then((res) => res.json())
            .then((res) => setMarcas(res))
            .catch((error) => console.error(error));
    }
    const Register = () => {
        const formData = new FormData();

        for (let key in moto) {
            formData.append(key, moto[key]);
        }
        formData.append("file", files[0]);
        actions.generateMoto(formData);
        alert("Moto creada correctamente!")
        actions.cargarMotos();

        history.push("/dashboard")
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
                        <label htmlFor="formGroupExampleInput" className="form-label text ">Marca<strong className="redDot"> *</strong></label>

                        <select className="form-select text-muted" aria-label="Default select example" name="marca_id" onChange={(e) => changeData(e)}>
                            <option disabled selected >Selecciona Marca</option>
                            {
                                marcas.map((value, index) => {
                                    return <option value={value.id}>{value.name}</option>

                                })
                            }

                        </select>

                    </div>
                    <div className="col mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Modelo<strong className="redDot"> *</strong></label>
                        <select className="form-select text-muted" aria-label="Default select example" name="modelo_id" onChange={(e) => changeData(e)}>
                            <option disabled selected >Selecciona Modelo</option>
                            {
                                modelos.map((value, index) => {
                                    return <option value={value.modelo_id}>{value.name}</option>

                                })
                            }

                        </select>

                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Tipo<strong className="redDot"> *</strong></label>
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
                            <label htmlFor="formGroupExampleInput" className="form-label text">Cilindrada<strong className="redDot"> *</strong></label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="power" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4 input-group mb-3">
                            <span className="input-group-text text">Precio por día <strong className="redDot"> *</strong>    </span>
                            <input type="text" className="form-control text-muted  " placeholder="" aria-label="Last name" name="priceday" onChange={(e) => changeData(e)} />
                            <span className="input-group-text">€</span>
                        </div>
                        <div className="col mt-4 input-group mb-3">
                            <span className="input-group-text text">Precio por día (+ de 3)</span>
                            <input type="text" className="form-control text-muted  " placeholder="" aria-label="Last name" name="discount_weekend" onChange={(e) => changeData(e)} />
                            <span className="input-group-text">€</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4 input-group mb-3">
                            <span className="input-group-text text">Precio por semana <strong className="redDot"> *</strong></span>
                            <input type="text" className="form-control text-muted  " placeholder="" aria-label="Last name" name="priceweek" onChange={(e) => changeData(e)} />
                            <span className="input-group-text">€</span>
                        </div>
                        <div className="col mt-4 input-group mb-3">
                            <span className="input-group-text text">Precio por día (+ de 7)</span>
                            <input type="text" className="form-control text-muted  " placeholder="" aria-label="Last name" name="discount_week" onChange={(e) => changeData(e)} />
                            <span className="input-group-text">€</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-labe text">Matrícula<strong className="redDot"> *</strong></label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="First name" name="matricula" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Comentarios</label>
                            <input type="text" className="form-control text-muted" placeholder="moto nueva, con accesorios, ..." aria-label="Last name" name="comment" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Provincia<strong className="redDot"> *</strong></label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="First name" name="provincia" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Ciudad<strong className="redDot"> *</strong></label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="ciudad" onChange={(e) => changeData(e)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Email de contacto<strong className="redDot"> *</strong></label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="First name" name="email" onChange={(e) => changeData(e)} />
                        </div>
                        <div className="col mt-2">
                            <label htmlFor="formGroupExampleInput" className="form-label text">Teléfono de contacto<strong className="redDot"> *</strong></label>
                            <input type="text" className="form-control text-muted" placeholder="" aria-label="Last name" name="telefono" onChange={(e) => changeData(e)} />
                        </div>
                    </div>





                    <div className=" col mb-3 mt-2">
                        <label htmlFor="formGroupExampleInput" className="form-label text">Imágenes<strong className="redDot"> *</strong></label>
                        <input type="file" className="form-control text-muted" id="inputGroupFile02" onChange={(e) => setFiles(e.target.files)} />

                    </div>

                    <div className="d-flex justify-content-center mt-5">



                        <button type="button" className="btn btn-success col-3" onClick={() => {
                            Register()


                        }}>Añadir moto</button></div>

                </div>
                : <Redirect to="/login" />
            } </div>


    )
}