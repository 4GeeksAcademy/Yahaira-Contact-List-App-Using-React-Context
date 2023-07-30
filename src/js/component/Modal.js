import React, { useContext, useEffect, useState } from "react";
import Form from "./form";
import propTypes from "prop-types";

//create your first component
const Modal = (props) => {
	return (
        <div className="container-modal">
            <div className="modal" id={"contactModal-"+props.index} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add a new contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form full_name={props.full_name} address={props.address} email={props.email} phone={props.phone} index={(props.index).toString()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

Modal.propTypes = {
    index: propTypes.string,
    full_name: propTypes.string,
    address: propTypes.string,
    phone: propTypes.string,
    email: propTypes.string,
    img: propTypes.string
}

export default Modal;
