import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MotoCardUser = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotosUser(store.respuesta.userID);

    }, [])



    return (

        store.motosUser.map((value, index) => {
            return (

                <div className="card col-4 mb-3 mx-2 shadow p-3 mb-5 bg-body rounded">
                    <img src={value.image_url} className="card-img-top px-1 py-1" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{value.ciudad}</h5>
                        <p className="card-text">{value.modelo}</p>
                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <p className="card-text">Precio por día:{value.priceday} €</p>
                        <p className="card-text">Precio por semana:{value.priceweek} €</p>

                    </div>
                </div>

            )
        })



    )
}
