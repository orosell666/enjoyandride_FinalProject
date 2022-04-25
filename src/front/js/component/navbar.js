import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { actions, store } = useContext(Context);

	return (
		<nav className="navbar ">

			<div className="container justify-content-center">
				<Link to="/">
					<h1 className=" title fs-1 fw-bold noline" style={{ "text-decoration": "none" }} >ENJOY&RIDE</h1>
				</Link>
				<div className="me-1 ">
					{store.respuesta.token ?
						<button className="btn btn-light " onClick={() => { actions.logout(); }}>LOGOUT</button>

						:


						<div className="d-flex justify-content-end">
							<Link to="/login">
								<button className="btn btn-light ">LOGIN</button>
							</Link>
							<div className="ms-1">
								<Link to="/registro">
									<button className="btn btn-warning">REGISTRO</button>
								</Link></div>
						</div>}
				</div>

			</div>
		</nav>
	)
}
