import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MotoCard = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotos();
        actions.generateToken();

    }, [])



    return (

        store.motos.map((value, index) => {
            return (

                <div className="card mb-5 mx-2 shadow p-3 .col-md-12  bg-body rounded" key={index}>
                    <img src={value.image_url} className="card-img-top px-1 py-2" alt="Moto" />
                    <div className="card-body">
                        <h5 className="card-title">{value.ciudad}</h5>
                        <p className="card-text">{value.marca}, {value.modelo}</p>

                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
                            Reserva!
                        </button>

                        <div className="modal fade" id={`id${value.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <img src={value.image_url} />
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">{value.marca}, {value.modelo}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="card-text"></p>
                                        <p className="card-text"><strong>Potencia:  </strong> {value.power}cc</p>
                                        <p className="card-text"><strong>Ubicación: </strong>{value.ciudad}, {value.provincia}</p>
                                        <p className="card-text"><strong>Telefono:  </strong>{value.telefono}</p>
                                        <p className="card-text"><strong>Email:  </strong>{value.email}</p>

                                        <p className="card-text"><strong>Precio por día:  </strong>{value.priceday} €</p>
                                        <p className="card-text"><strong>Precio por semana:  </strong>{value.priceweek} €</p>
                                        ...</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            )
        })



    )
}
