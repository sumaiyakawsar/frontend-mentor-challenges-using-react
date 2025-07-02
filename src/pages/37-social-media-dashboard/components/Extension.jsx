const Extension = ({ extension, onToggle, onRemove }) => {
    const { logo, name, description, isActive } = extension;

    return (
        <div className={`extensions__card ${isActive ? 'active' : 'inactive'}`}>
            <div className="extensions__header">
                {/* <img src={logo} alt={`${name} logo`} /> */}
                <div className="info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="extensions__footer">
                <button className="remove-btn" onClick={onRemove}>Remove</button>

                <label className="switch" role="switch" aria-checked={extension.isActive}>
                    <input
                        type="checkbox"
                        checked={extension.isActive}
                        onChange={onToggle}
                        aria-label="Toggle extension"
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default Extension