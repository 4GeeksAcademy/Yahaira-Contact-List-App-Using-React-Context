import React, {useContext, useEffect} from "react";
import Contact from "../component/contact";
import Modal from "../component/modal";
import ConfirmationModal from "../component/confirmation-modals";
import {Context} from "../store/appContext";
import "../../styles/home.css";
import golden from "../../img/golden.jpg"

export const Home = () => {
	const {store, actions} = useContext(Context);
	const {contacts} = store;
	useEffect(() => {
		actions.getAgenda()
	}, [])
	return(
		<div className="main-content text-center mt-5">
			<Modal index={(-1).toString()}/>
			<div className="list-group">
				{contacts.map( (contact) =>
					<div key={(contact.id).toString()}>
						<Contact 
							index={(contact.id).toString()}
							full_name={contact.full_name} 
							address={contact.address} 
							email={contact.email}
							img={golden}
							phone={contact.phone}
						/>
						<Modal full_name={contact.full_name} address={contact.address} email={contact.email} phone={contact.phone} index={(contact.id).toString()} />
						<ConfirmationModal index={contact.id}  onDelete={() => actions.delContact((contact.id).toString())}/>
					</div>
				)}
			</div>
		</div>
	)
};
