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
            <form className=" container ">
                <div className="">
                    <label for="exampleFormControlInput1" className="form-label text-muted mx-auto">Email</label><br />
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="form-group mt-2">
                    <label for="exampleFormControlInput1" className="form-label text-muted">Contraseña</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-dark mt-3 "
                    //disabled={!validateForm()}
                    onClick={() => {
                        actions.generateToken(email, password)



                    }}
                >
                    Submit
                </button>




            </form>
        </div >
    );
};

