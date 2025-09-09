import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Footer from '../footer/Footer';
import NavigateHome from '../main-nav/NavigateHome';
import './style/layout.scss'
import { ThemeProvider } from '../theme/ThemeContext';

const Layout = ({ children }) => {

    const { pathname } = useLocation();


    let bgClass = "project-default";
    let themeClass = "";

    const lastSegment = pathname.split("/").pop();
    if (lastSegment && lastSegment.startsWith("project")) {
        bgClass = lastSegment;
    }

    const themedProjects = ["project32", "project36", "project37"];

    const useThemeProvider = themedProjects.includes(lastSegment) || pathname === "/";

    // if (themedProjects.includes(lastSegment)) {
    //     themeClass = `theme-${lastSegment}`;
    // }

    // if (pathname.endsWith("project1")) bgClass = "project-1";
    // else if (pathname.endsWith("project2")) bgClass = "project-2";
    // else if (pathname.endsWith("project3")) bgClass = "project-3";
    // else if (pathname.endsWith("project7")) bgClass = "project-7";
    // else if (pathname.endsWith("project8")) bgClass = "project-8";
    // else if (pathname.endsWith("project9")) bgClass = "project-9";
    // else if (pathname.endsWith("project10")) bgClass = "project-10";
    // else if (pathname.endsWith("project11")) bgClass = "project-11";
    // else if (pathname.endsWith("project12")) bgClass = "project-12";
    // else if (pathname.endsWith("project15")) bgClass = "project-15";
    // else if (pathname.endsWith("project16")) bgClass = "project-16";
    // else if (pathname.endsWith("project17")) bgClass = "project-17";
    // else if (pathname.endsWith("project18")) bgClass = "project-18";
    // else if (pathname.endsWith("project19")) bgClass = "project-19";
    // else if (pathname.endsWith("project20")) bgClass = "project-20";
    // else if (pathname.endsWith("project21")) bgClass = "project-21";
    // else if (pathname.endsWith("project27")) bgClass = "project-27";
    // else if (pathname.endsWith("project28")) bgClass = "project-28";
    // else if (pathname.endsWith("project29")) bgClass = "project-29";
    // else if (pathname.endsWith("project30")) bgClass = "project-30";
    // else if (pathname.endsWith("project31")) bgClass = "project-31";
    // else if (pathname.endsWith("project32")) bgClass = "project-32";
    const content = (
        <div className={`layout ${bgClass}`}>
            <NavigateHome />
            <main>{children}</main>
            <Footer />
        </div>
    );


    return useThemeProvider ? (
        <ThemeProvider projectId={lastSegment || "homepage"}>
            {content}
        </ThemeProvider>
    ) : (
        content
    );
};

export default Layout