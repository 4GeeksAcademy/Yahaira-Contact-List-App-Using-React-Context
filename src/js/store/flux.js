import golden from "../../img/golden.jpg";

const apiUrl = process.env.API_URL
const agendaSlug = process.env.AGENDA_SLUG
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContact: async(contact) => {
				const raw = JSON.stringify({...contact, agenda_slug: agendaSlug});
				const requestOptions = {method: 'POST', headers: {"Content-Type": "application/json"}, body: raw};
				let response = await fetch(apiUrl, requestOptions);

				if(!response.ok) {
					console.log(response.status + ": " + response.statusText)
					return
				}

				let data = await response.json()
				let store = getStore();
				let newContacts = [...store.contacts, {...contact, id: data.id}]

				//reset the global store
				setStore({ contacts: newContacts });
			},
			delContact: (id) => {
				const requestOptions = {method: 'DELETE'};				  
				fetch(apiUrl + id, requestOptions)
				.then(response => {
					if(response.ok) {
						let newContacts = [...getStore().contacts]
						let getIndex = newContacts.findIndex(contact => contact.id === id)
						newContacts.splice(getIndex, 1)
						//reset the global store
						setStore({ contacts: newContacts });
					} else {
						console.log(response.status + ": " + response.statusText)
						return
					}
				}).catch(err => console.error(err))
			},
			updateContact: async(updatedContact, id) => {
				var raw = JSON.stringify(updatedContact);
				var requestOptions = {method: 'PUT', headers: {"Content-Type": "application/json"}, body: raw};
				let response = await fetch(apiUrl + id.toString(), requestOptions)
				if(!response.ok) {
					console.log(response.status + ": " + response.statusText)
					return
				}
				let store = getStore();
				let getIndex = store.contacts.findIndex(contact => contact.id === id)
				store.contacts[getIndex] = updatedContact;

				setStore({ contacts: store.contacts });
			},
			getAgenda: () => {
				fetch(apiUrl + "agenda/" + agendaSlug)
				.then(response => {
					if(response.ok){
						// response passed
						return response.json()
					} else {
						// response failed
						console.log(response.status + ": " + response.statusText)
					}
				})
				.then(data => {
					console.log(data)
					setStore({contacts: data})
				})
				.catch(error => {
					console.error(error)
				})

				console.log("Request started")
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
