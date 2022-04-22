import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const MotoCard = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.cargarMotos();

    }, [])



    return (

        store.motos.map((value, index) => {
            return (<div className="card" style={{ width: 250 }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{value.ciudad}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            )
        })


        // <div className="card" style={{ width: 250 }}>

        //     <img src="https://res.cloudinary.com/orosell666/image/upload/v1650405772/adam-rhodes--W2MaNv64r0-unsplash_z9kowl.jpg" className="card-img-top px-1 py-1" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">Honda</h5>
        //         <p className="card-text">CBR 500</p>
        //         <p className="card-text">Sabadell, Barcelona</p>
        //         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        //             Reserva!
        //         </button>
        //         <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        //             <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        //                 <div className="modal-content">
        //                     <img src="https://res.cloudinary.com/orosell666/image/upload/v1650405772/adam-rhodes--W2MaNv64r0-unsplash_z9kowl.jpg" />
        //                     <div className="modal-header">
        //                         <h5 className="modal-title" id="staticBackdropLabel">Marca</h5>
        //                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                     </div>
        //                     <div className="modal-body">
        //                         <p className="card-text">CBR 500</p>
        //                         <p className="card-text">Sabadell, Barcelona</p>
        //                         <p className="card-text">Telefono:</p>
        //                         <p className="card-text">Email:</p>
        //                         <p className="card-text">Precio por día:</p>
        //                         <p className="card-text">Precio por semana:</p>
        //                         ...
        //                     </div>
        //                     <div className="modal-footer">
        //                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}