import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Component1 } from "../component/component1";
import { MotoCard } from "../component/motocard";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<Component1 />
			</div>
			<div className="container">
				<MotoCard />
			</div>

		</div>
	);
};
