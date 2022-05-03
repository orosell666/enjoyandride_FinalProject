import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// falta useState para guardar la info del mail i passwprd
// funcion que se ejecute cuando haga onclick en el boton login=> hara un fetch a mi api (url del insomnia)




export const Login = () => {
    const { actions, store } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    return (
        <div >

            {store.respuesta.token ? history.push('/dashboard') : ""}
            <div className="container">
                <img className="img-fluid" src="https://res.cloudinary.com/orosell666/image/upload/c_fill,g_auto,h_456,w_1296/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,/v1650639584/harley-davidson-rEPAjhzt7TY-unsplash_pgfixd.jpg" /></div>
            <form className=" container mt-5">
                <div className="row g-3 justify-content-center">
                    <div className="col-4">
                        <label for="inputEmail4" className="form-label text-muted justify-content-center">Email</label><br />
                        <input className="form-control"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        /></div>

                    <div className="col-4">
                        <label for="inputPassword4" className="form-label text-muted">Contraseña</label><br />
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className="row justify-content-center">


                        <button

                            type="button"
                            className="btn btn-success mt-3 col-3"
                            //disabled={!validateForm()}
                            onClick={() => {
                                actions.generateToken(email, password)



                            }}
                        >
                            Entrar
                        </button>
                    </div>
                </div>




            </form>
        </div >
    );
};

