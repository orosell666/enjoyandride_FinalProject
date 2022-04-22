

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			respuesta: {},
			datosUsuario: {},
			datosMoto: {},
			motos: [],


		},


		actions: {

			//ESTA FUNCIÓN ME RECUPERA LA INFO DE TODAS LAS MOTOS EN EL COMPONENTE MotoCard
			cargarMotos: async () => {

				await fetch(process.env.BACKEND_URL + "/api/recuperaMotos")
					.then(resp => resp.json())

					.then(data => setStore({ motos: data }))
				// .catch(error => console.log("Error al recuperar las motos", error));

			},

			generateToken: (email, password) => {
				// fetching data from the backend
				console.log(email, password);




				//fetch(process.env.BACKEND_URL + "/token"/token", {
				fetch(process.env.BACKEND_URL + "/api/token", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error));


			},

			generateRegister: (user) => {
				fetch(process.env.BACKEND_URL + "/api/registroUsuarios", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user),
				})
					.then(resp => resp.json())
					.then(data => setStore({ datosUsuario: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			generateMoto: (moto) => {
				const token = getStore().respuesta.token

				console.log(moto)

				fetch(process.env.BACKEND_URL + "/api/registroMoto", {
					method: "POST",
					headers: {
						"Authorization": "Bearer " + token, // ⬅⬅⬅ authorization header

					},
					body: moto
				})
					.then(resp => resp.json())
					.then(data => setStore({ datosMoto: data }))
					.catch(error => console.log("Error loading message from backend", error))

			},


			loadMarca: () => {
				fetch(process.env.BACKEND_URL + "/api/marca")
					.then((res) => res.json())
					.then((res) => setStore({ marca: res.results }))
					.catch((error) => console.error(error));
			},
			loadModelo: () => {
				fetch(process.env.BACKEND_URL + "/api/modelo")
					.then((res) => res.json())
					.then((res) => setStore({ modelo: res.results }))
					.catch((error) => console.error(error));
			},
			loadTipo: () => {
				fetch(process.env.BACKEND_URL + "/api/tipo")
					.then((res) => res.json())
					.then((res) => setStore({ tipo: res.results }))
					.catch((error) => console.error(error));
			},

			logout: () => {
				setStore({ respuesta: { token: null } })
			},

			uploadImage: (evt) => {
				evt.preventDefault();
				console.log("This are the files", files);
				let body = new FormData();
				body.append("image", files[0])
				const options = {
					body,
					method: "POST",
				}

				fetch(process.env.BACKEND_URL + "/api/upload", options)
					.then(resp => resp.json())
					.then(data => console.log("Success", data))
					.catch(errors => console.log("ERRORRR", error));

			}


		}

	}
};

export default getState;