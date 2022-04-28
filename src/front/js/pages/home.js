import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Component1 } from "../component/component1";
import { MotoCard } from "../component/motocard";
import { Buscador } from "../component/buscador";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<div>
			<div className="container">
				<img className="img-fluid" src="https://res.cloudinary.com/orosell666/image/upload/c_fill,g_auto,h_456,w_1296/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,/v1650490129/a8vcjheho6e7mms0zebz.jpg" /></div>
			<div className="container">
				<Component1 />
			</div>
			<div className="container">
				<Buscador />
			</div>
			<div className="container border-top ">
				<div className="card-group mt-5 ">
					<div className="row row-cols-1 row-cols-md- g-4 ">

						<MotoCard />
					</div>
				</div>
			</div>

		</div >
	);
};

// d-flex flex-row flex-nowrap overflow-auto  PARA HACER CAROUSEL CON SLIDE DEBAJO