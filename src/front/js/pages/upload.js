import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const UploadView = props => {
	const { store, actions } = useContext(Context);
	const [files, setFiles] = useState(null);

	const uploadImage = (evt) => {
		evt.preventDefault();
		console.log("This are the files", files);
		let body = new FormData();
		body.append("image", files[0])
		const options = {
			body,
			method: "POST",
		}

		fetch("https://3001-orosell666-enjoyandride-qvip2xpx6vq.ws-eu34.gitpod.io/api/upload", options)
			.then(resp => resp.json())
			.then(data => console.log("Success", data))
			.catch(errors => console.log("ERRORRR", error));

	}


	return (
		<div className="jumbotron">

			<form onSubmit={uploadImage}>
				<input type="file" onChange={(e) => setFiles(e.target.files)} />
				<button>Upload</button>
			</form>
		</div>
	);
};

UploadView.propTypes = {
	match: PropTypes.object
};
