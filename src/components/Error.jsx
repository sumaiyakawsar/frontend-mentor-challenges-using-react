function Error({ message, className, id, icon: Icon }) {
    return (
        <div
            role="alert"
            id={id}
            className={className}
        >
            {Icon && <Icon aria-hidden="true" />}
            {message}
        </div>
    )
}

export default Error