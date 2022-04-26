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
            const imageSize = {
                width: "250px",
                height: "150 px",
            }
            const footerposition = {
                pb: "20px"
            }
            return (

                <div className="card col-4 mb-3 shadow p-3 mb-5 bg-body rounded" key={index}>
                    <img src={value.image_url} className="card-img-top mx-auto " style={imageSize} alt="Moto" />
                    <div className="card-body text-center">
                        <h5 className="card-title text">{value.marca}, {value.modelo}</h5>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text">{value.priceday} €/día</p>

                        <div class="card-footer bg-transparent border-success" style={footerposition}>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
                                Reserva!
                            </button>
                        </div>

                        <div className="modal fade" id={`id${value.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable text-center">
                                <div className="modal-content">
                                    <img src={value.image_url} style={imageSize} className="mx-auto" />
                                    <div className="modal-header text-center ">
                                        <h5 className="modal-title text text-center " id="staticBackdropLabel">{value.marca}, {value.modelo}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="card-text"><strong className="text">Potencia:  </strong> {value.power}cc</p>
                                        <p className="card-text"><strong className="text">Ubicación: </strong>{value.ciudad}, {value.provincia}</p>
                                        <p className="card-text"><strong className="text">Telefono:  </strong>{value.telefono}</p>
                                        <p className="card-text"><strong className="text">Email:  </strong>{value.email}</p>
                                        <p className="card-text"><strong className="text">Precio por día:  </strong>{value.priceday} €</p>
                                        <p className="card-text"><strong className="text">Precio por semana:  </strong>{value.priceweek} €</p>
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
