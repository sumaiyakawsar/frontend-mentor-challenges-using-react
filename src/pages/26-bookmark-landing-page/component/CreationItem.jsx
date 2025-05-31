function CreationItem({ desktopImg, mobileImg, title }) {
    return (
        <a className="creations__item" href="#/project24">
            <picture>
                <source media="(min-width: 768px)" srcSet={desktopImg} />
                <img src={mobileImg} alt={title} />
            </picture>
            <h3>{title}</h3>
        </a>
    );
}
export default CreationItem