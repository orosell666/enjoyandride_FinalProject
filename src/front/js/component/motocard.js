import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MotoCard = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotos();

    }, [])



    return (

        store.motos.map((value, index) => {
            return (<div className="card-group d-flex">

                <div className="card col-1">
                    <img src={value.image_url} className="card-img-top px-1 py-1" alt="..." />    <div className="card-body">
                        <h5 className="card-title">{value.ciudad}</h5>
                        <p className="card-text">{value.modelo}</p>
                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Reserva!
                        </button>

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <img src={value.image_url} />
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Marca</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="card-text"></p>
                                        <p className="card-text">Potencia: {value.power}cc</p>
                                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                                        <p className="card-text">Telefono:{store.respuesta.telefono}</p>
                                        <p className="card-text">Email:</p>
                                        <p className="card-text">Precio por día:{value.priceday} €</p>
                                        <p className="card-text">Precio por semana:{value.priceweek} €</p>
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })



    )
}
