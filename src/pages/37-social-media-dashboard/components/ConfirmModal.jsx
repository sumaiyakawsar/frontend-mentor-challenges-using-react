function ConfirmModal({ isOpen, onConfirm, onCancel, extensionName }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Remove "{extensionName}"?</h3>
                <p>This action cannot be undone.</p>
                <div className="modal-actions">
                    <button className="btn cancel" onClick={onCancel}>Cancel</button>
                    <button className="btn confirm" onClick={onConfirm}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
