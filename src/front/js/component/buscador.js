import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Buscador = () => {
    return (
        <div className="mx-auto">
            <div className="text-center border-bottom">
                <h3>Busca tu moto</h3>
            </div>
            <div className="row g-3 mt-3 mb-5 ">
                <div className="col-sm-3 ">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Provincia</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-sm-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Ciudad</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-sm-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Tipo</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-sm-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Marca</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>


    )
}