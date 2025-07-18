import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import '../../styles/component.scss'

const NavigateHome = () => {


    return (
        <section className="main-home">
            <Link
                to="/"
                className="home"
                aria-label="Home"
            >
                <IoMdHome className="home-icon" />

            </Link>

        </section>

    );
};

export default NavigateHome;