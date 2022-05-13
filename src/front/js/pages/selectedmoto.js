import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const MotoSelected = () => {
    const { store, actions } = useContext(Context);
    const id = useParams().id;
    const [moto, setMoto] = useState({});

    useEffect(() => {

        actions.cargarMotoSeleccionada(id).then(data => setMoto(data))


    }, [])

    const footerposition = {
        pb: "20px"
    }
    const imageSize = {
        width: "600x",
        height: "300 px",
    }

    return moto.id ? (



        <div>

            <div className="container">
                <h1 className="text-center mt-5 border-bottom" id={`id${moto.id}`}>{moto.marca} {moto.modelo}</h1>
                <h2 className="text-center"> {moto.power}cc</h2>
                <div className="container text-center">
                    <img src={moto.image_url} className=" border border-success rounded mt-5" id={`id${moto.id}`} style={imageSize} alt="Moto" />
                </div>
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="container-lg " >
                        <form className="row g-3">
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputEmail5" className="form-label text"><strong>Marca:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom " id={`id${moto.id}`} value={moto.marca} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Modelo:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.modelo} />

                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputEmail5" className="form-label text"><strong>Ciudad:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.ciudad} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Provincia:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.provincia} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputEmail5" className="form-label text"><strong>Precio por día:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.priceday + "€"} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Precio por semana:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.priceweek + "€"} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Precio por día (+ de 3):</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.discount_weekend + "€"} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Precio por día (+ de 7):</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.discount_week + "€"} />
                            </div>
                            <div className="container">
                                <h2 className="text-center">Contacto</h2></div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Teléfono:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.telefono} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Email:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.email} />
                            </div>
                            <div className="col-md-5 ms-5 ps-5">
                                <label htmlFor="inputPassword5" className="form-label text"><strong>Comentarios:</strong></label>
                                <input type="text" readonly className="form-control-plaintext border-bottom" id={`id${moto.id}`} value={moto.comment} />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    ) : <h1>Cargando</h1>
}



