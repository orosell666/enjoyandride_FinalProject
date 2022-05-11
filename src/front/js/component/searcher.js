import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";


export const FilterMotos = () => {
    const [inputText, setInputText] = useState("");
    const { store, actions } = useContext(Context);
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);

        // useEffect(() => {

        //    actions.cargarMotosFiltradas();

        //  }, [])

        return (
            <div>
                <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" key={index}>
                    <img src={value.image_url} className="card-img-top img-fluid mx-auto " style={imageSize} alt="Moto" />
                    <div className="card-body text-center">
                        <h5 className="card-title text"><strong>{value.marca}, {value.modelo}</strong></h5>
                        <p className="card-text">{value.ciudad}, {value.provincia}</p>
                        <p className="card-text">{value.power}cc</p>
                        <p className="card-text">{value.priceday} €/día</p>

                        <div class="card-footer bg-transparent border-success" style={footerposition}>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
                                ¡Reserva!
                            </button>
                        </div> </div></div>
                <ul>
                    {filteredData.map((motos) => (
                        <li key={motos.ciudad}>{ }</li>
                    ))}
                </ul>
            </div>
        )
    }
}

/*
FUNCIONALIDAD DE BUSQUEDA: 
  FRONT-END: montr el formulario- comprobar en consola qeu el filtro funciona- enviar al flux (la funcion tiene que estar aqui en actions y crear el fetch desde alli) 
  concatenar el fetch con el criterio de busqueda    URL/api/search/ parametros

  BACK END: crear la ruta al endpoint - extraer el dato que esta en la URL - el dato extraido lo meto en una funcion del Models y dentro de esta funcion la logica  cls.query.filter_by()

*/
