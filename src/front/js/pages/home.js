import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Component1 } from "../component/component1";

import "../../styles/home.css";
import { Upload } from "../component/uploadimages";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<Component1 />
			</div>

		</div>
	);
};
