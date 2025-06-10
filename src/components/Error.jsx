function Error({ message, className,  id }) {
    return (
        <div role="alert" id={id} className={className}>{message}</div>
    )
}

export default Error