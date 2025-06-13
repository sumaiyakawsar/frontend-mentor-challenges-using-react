
const DeleteModal = ({ onCancel, onConfirm }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Delete comment</h2>
                <p>
                    Are you sure you want to delete this comment? This will remove the
                    comment and can't be undone.
                </p>
                <div className="modal-actions">
                    <button className="btn cancel" onClick={onCancel}>No, Cancel</button>
                    <button className="btn confirm" onClick={onConfirm}>Yes, Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
