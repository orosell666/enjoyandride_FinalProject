const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			respuesta: {},

		},


		actions: {


			generateToken: (email, password) => {
				// fetching data from the backend
				console.log(email, password);

				//fetch(process.env.BACKEND_URL + "/token", {
				fetch("https://3001-orosell666-enjoyandride-eqyjgo2k9ww.ws-eu38.gitpod.io/api/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			generateRegister: (email, password, name, lastName, phonenumber, license, adress, birthdate) => {
				fetch("https://3001-orosell666-enjoyandride-eqyjgo2k9ww.ws-eu38.gitpod.io/api/registroUsuarios", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password, name: name, lastName: lastName, phonenumber: phonenumber, license: license, adress: adress, birthdate: birthdate }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

		}

	}

};

export default getState;