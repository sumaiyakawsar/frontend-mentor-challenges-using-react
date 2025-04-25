import { useLocation } from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import './style/layout.scss'

const Layout = ({ children }) => {

    const { pathname } = useLocation();


    let bgClass = "project-default";

    if (pathname.endsWith("project1")) bgClass = "project-1";
    else if (pathname.endsWith("project2")) bgClass = "project-2";
    else if (pathname.endsWith("project3")) bgClass = "project-3";
    else if (pathname.endsWith("project7")) bgClass = "project-7";
    else if (pathname.endsWith("project8")) bgClass = "project-8";
    else if (pathname.endsWith("project9")) bgClass = "project-9";
    else if (pathname.endsWith("project10")) bgClass = "project-10";
    else if (pathname.endsWith("project11")) bgClass = "project-11";
    else if (pathname.endsWith("project12")) bgClass = "project-12";
    else if (pathname.endsWith("project15")) bgClass = "project-15";



    return (
        <div className={`layout ${bgClass}`} >
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )

}

export default Layout