import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-primary">

			<div className="container justify-content-center">

				<span className=" title fs-1 fw-bold">ENJOY&RIDE</span>
				<div className="me-1 ">
					<Link to="/login">
						<button className="btn btn-light ">LOGIN</button>
					</Link>
				</div>
				<div className="ms-1">
					<Link to="/registro">
						<button className="btn btn-warning">REGISTRO</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
