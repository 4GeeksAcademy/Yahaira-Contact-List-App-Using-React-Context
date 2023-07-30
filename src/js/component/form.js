import React, {useContext, useRef, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import golden from "../../img/golden.jpg";
import propTypes from "prop-types";

//create your first component
const Form = (props) => {
    
    const {store, actions} = useContext(Context)
    const [fullname, setFullname] = useState(props.full_name)
    const [email, setEmail] = useState(props.email)
    const [phone, setPhone] = useState(props.phone)
    const [address, setAddress] = useState(props.address)
    const updateContact = store.contacts.find(contact => contact.id == props.index)

    const saveOrEditContact = () => {
        if(props.index == -1) {
            // Create a new contact
            actions.addContact({full_name: fullname, address: address, email: email, phone: phone, img: golden })

        } else if(props.index >= 0) {
            // Edit a contact
            updateContact.full_name = fullname
            updateContact.email = email
            updateContact.phone = phone
            updateContact.address = address
            actions.updateContact(updateContact, props.index)
        }
    };
	return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" 
                    id="fullname" placeholder="Full Name" 
                    onChange={e => setFullname(e.target.value)}
                    value={fullname || ""}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" 
                    aria-describedby="emailHelp" placeholder="Enter email" 
                    onChange={e => setEmail(e.target.value)}
                    value={email || ""}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" 
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Enter phone" value={phone || ""}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" 
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Enter address" value={address || ""}/>
                </div>
            </form>
            <div className="modal-footer">
                <button type="button" className="save-button btn btn-primary" data-bs-dismiss="modal" onClick={() => saveOrEditContact()}>Save</button>
                <a className="back btn" data-bs-dismiss="modal">or get back to contacts</a>
            </div>
        </div>
	);
};

Form.propTypes = {
    index: propTypes.string,
    full_name: propTypes.string,
    address: propTypes.string,
    phone: propTypes.string,
    email: propTypes.string,
    img: propTypes.string
}

export default Form;
