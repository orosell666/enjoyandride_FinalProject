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
				fetch("https://3001-orosell666-enjoyandride-6dw8fl5jqe2.ws-eu38.gitpod.io/api/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			generateRegister: (user) => {
				fetch("https://3001-orosell666-enjoyandride-6dw8fl5jqe2.ws-eu38.gitpod.io/api/registroUsuarios", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			generateMoto: (moto) =>
				fetch("https://3001-orosell666-enjoyandride-6dw8fl5jqe2.ws-eu38.gitpod.io/api/registroMoto", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(moto),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error))
		},

		loadMarca: () => {
			fetch("https://3001-orosell666-enjoyandride-6dw8fl5jqe2.ws-eu38.gitpod.io/api/marca")
				.then((res) => res.json())
				.then((res) => setStore({ marca: res.results }))
				.catch((error) => console.error(error));
		},

	}

}

	;

export default getState;