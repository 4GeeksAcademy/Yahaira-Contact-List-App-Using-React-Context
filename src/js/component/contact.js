import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import propTypes from "prop-types";

//create your first component
const Contact = (props) => {
	return (
		<div className="card">
            <div className="content">
                <img src={props.img} className="image" alt={props.full_name} />
                <div className="info">
                    <div className="card-body">
                        <h5 className="card-title">{props.full_name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{props.address}</span>
                        </li>
                        <li className="list-group-item">
                            <FontAwesomeIcon icon={faPhoneFlip} />
                            <span>{props.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>{props.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="actions">
                <button className="btn" data-bs-target={"#contactModal-" + props.index} data-bs-toggle="modal"><FontAwesomeIcon className="actionIcons" icon={faPencil} /></button>
                <button type="button" className="btn" data-bs-target={"#confirmationModal-" + props.index} data-bs-toggle="modal"><FontAwesomeIcon className="actionIcons" icon={faTrashCan} /></button>
            </div>
        </div>
	);
};


Contact.propTypes = {
    history: propTypes.object,
    onDelete: propTypes.func,
    onUpdate: propTypes.func,
    index: propTypes.string,
    full_name: propTypes.string,
    address: propTypes.string,
    phone: propTypes.string,
    email: propTypes.string,
    img: propTypes.string
}
export default Contact;
