import React from "react";
import propTypes from "prop-types";

//create your first component
const ConfirmationModal = (props) => {
	return (
        <div className="modal fade" id={"confirmationModal-" + props.index} tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="confirm-modal-title modal-title fs-5" id="confirmationModalLabel">Are you sure?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className="confirmation-message">if you delete this contact, you will not be able to see its data again </p>
                </div>
                <div className="confirmation-button modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => props.onDelete()}>Confirm</button>
                </div>
                </div>
            </div>
        </div>
	);
};

ConfirmationModal.propTypes = {
    index: propTypes.string,
    onDelete: propTypes.func
}

export default ConfirmationModal;