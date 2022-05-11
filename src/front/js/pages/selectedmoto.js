import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MotoSelected = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotoSeleccionada();


    }, [])



    return (

        store.motos.map((value, index) => {

            const footerposition = {
                pb: "20px"
            }
            const imageSize = {
                width: "600x",
                height: "300 px",
            }
            return (

                <div>

                    <div className="container">
                        <h1 className="text-center mt-5 border-bottom" id={`id${value.id}`}>{value.marca} {value.modelo}</h1>
                        <h2 className="text-center"> {value.power}cc</h2>
                        <div className="container text-center">
                            <img src={value.image_url} className=" border border-success rounded mt-5" id={`id${value.id}`} style={imageSize} alt="Moto" />
                        </div>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div className="container " >
                                <form className="row g-3">
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputEmail5" className="form-label text"><strong>Marca:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom " id={`id${value.id}`} value={value.marca} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Modelo:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.modelo} />

                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputEmail5" className="form-label text"><strong>Ciudad:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.ciudad} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Provincia:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.provincia} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputEmail5" className="form-label text"><strong>Precio por día:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.priceday + "€"} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Precio por semana:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.priceweek + "€"} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Precio por día (+ de 3):</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.discount_weekend + "€"} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Precio por día (+ de 7):</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.discount_week + "€"} />
                                    </div>
                                    <div className="container">
                                        <h2 className="text-center">Contacto</h2></div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Teléfono:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.telefono} />
                                    </div>
                                    <div className="col-md-5 ms-5 ps-5">
                                        <label htmlFor="inputPassword5" className="form-label text"><strong>Email:</strong></label>
                                        <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${value.id}`} value={value.email} />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            )
        })



    )
}
