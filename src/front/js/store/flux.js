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

			generateRegister: (email, password, name, lastName, phonenumber, license, adress, birthdate) => {
				fetch("https://3001-orosell666-enjoyandride-6dw8fl5jqe2.ws-eu38.gitpod.io/api/registroUsuarios", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password, name: name, lastName: lastName, phonenumber: phonenumber, license: license, adress: adress, birthdate: birthdate }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			generateMoto: (power, priceday, priceweek, discount_weekend, discount_week, comment, provincia, ciudad, direccion, latitud, longitud) =>
				fetch("https://3001-orosell666-enjoyandride-6dw8fl5jqe2.ws-eu38.gitpod.io/api/registroMoto", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ power: power, priceday: priceday, priceweek: priceweek, discount_weekend: discount_weekend, discount_week: discount_week, comment: comment, provincia: provincia, ciudad: ciudad, direccion: direccion, latitud: latitud, longitud: longitud }),
				})
					.then(resp => resp.json())
					.then(data => setStore({ respuesta: data }))
					.catch(error => console.log("Error loading message from backend", error))
		},

	}

}

	;

export default getState;