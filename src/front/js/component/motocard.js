import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
export const MotoCard = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotos();


    }, [])



    return (

        store.motos.map((value, index) => {
            const imageSize = {
                width: "300px",
                height: "180 px",
            }
            const footerposition = {
                pb: "20px"
            }
            return (

                <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" key={index}>
                    <img src={value.image_url} className="card-img-top img-fluid mx-auto " style={imageSize} alt="Moto" />
                    <div className="card-body text-center">
                        <h5 className="card-title text"><strong>{value.marca}, {value.modelo}</strong></h5>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text">{value.priceday} €/día</p>

                        <div class="card-footer bg-transparent border-success" style={footerposition}>

                            <div className="ms-3 me-3">
                                <Link to={`/selectedmoto/${value.id}`}>
                                    <button className="btn btn-success">¡Reserva!</button>
                                </Link></div>

                        </div>


                    </div>
                </div>


            )
        })



    )
}
