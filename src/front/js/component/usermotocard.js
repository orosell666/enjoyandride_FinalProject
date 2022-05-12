import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MotoCardUser = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotosUser(store.respuesta.userID);

    }, [])



    return (

        store.motosUser.map((value, index) => {
            const imageSize = {
                width: "300px",
                height: "180 px",
            }
            const footerposition = {
                pb: "20px"
            }
            return (

                <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded">
                    <img src={value.image_url} className="card-img-top  img-fluid mx-auto" style={imageSize} alt="..." />
                    <div className="card-body  text-center">
                        <h5 className="card-title text">{value.marca}, {value.modelo}</h5>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text"></p>
                        <p className="card-text"><strong>Precio/día:</strong> {value.priceday} €</p>
                        <p className="card-text"><strong>Precio/semana:</strong> {value.priceweek} €</p>

                    </div>
                </div>

            )
        })



    )
}
