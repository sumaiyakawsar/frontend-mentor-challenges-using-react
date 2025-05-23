import { useEffect } from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
import './styles/app.scss'
import Layout from "./components/layout/layout"
import ScrollToTop from './components/ScrollToTop';
import Homepage from "./pages/homepage/Homepage";
import Project1 from "./pages/1-qr-code-component-project/Project1";
import Project2 from "./pages/2-3-column-preview-card/Project2";
import Project3 from "./pages/3-launch-countdown-timer/Project3";
import Project7 from './pages/7-blog-preview-card/Project7';
import Project8 from './pages/8-profile-card-component/Project8';
import Project9 from './pages/9-nft-preview-card-component/Project9';
import Project10 from './pages/10-social-links-profile/Project10';
import Project11 from './pages/11-recipe-page/Project11';
import Project12 from './pages/12-product-preview-card-component/project12';
import Project13 from './pages/13-four-card-feature-section/project13';
import Project14 from './pages/14-testimonials-grid-section/Project14';
import Project15 from './pages/15-article-preview-component/Project15';
import Project16 from './pages/16-newsletter-sign-up/Project16';
import Project17 from './pages/17-time-tracking-dashboard/Project17';
import Project18 from './pages/18-tip-calculator-app/Project18';
import Project19 from './pages/19-interactive-rating/Project19';
import Project20 from './pages/20-faq-accordion/Project20';
import Project21 from './pages/21-contact-form/Project21';
import Project22 from './pages/22-news-homepage/Project22';
import Project23 from './pages/23-ecommerce-product-page/Project23';



const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <p> Redirecting... </p>;

}



function App() {

  const routes = [
    { path: "/", element: <Homepage /> },
    { path: "/project1", element: <Project1 /> },
    { path: "/project2", element: <Project2 /> },
    { path: "/project3", element: <Project3 /> },
    { path: "/project7", element: <Project7 /> },
    { path: "/project8", element: <Project8 /> },
    { path: "/project9", element: <Project9 /> },
    { path: "/project10", element: <Project10 /> },
    { path: "/project11", element: <Project11 /> },
    { path: "/project12", element: <Project12 /> },
    { path: "/project13", element: <Project13 /> },
    { path: "/project14", element: <Project14 /> },
    { path: "/project15", element: <Project15 /> },
    { path: "/project16", element: <Project16 /> },
    { path: "/project17", element: <Project17 /> },
    { path: "/project18", element: <Project18 /> },
    { path: "/project19", element: <Project19 /> },
    { path: "/project20", element: <Project20 /> },
    { path: "/project21", element: <Project21 /> },
    { path: "/project22", element: <Project22 /> }, 
    { path: "/project23", element: <Project23 /> },
    { path: "/rest-api-countries-react", url: "https://sumaiyakawsar.github.io/rest-api-countries-react/" },
    { path: "/space-tourism-website", url: "https://sumaiyakawsar.github.io/space-tourism-website/" },
    { path: "/sk-advice-generator", url: "https://sumaiyakawsar.github.io/sk-advice-generator/" },

    // { path: "*", element: <NotFound /> },

  ]

  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        {routes.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                route.url ?
                  <ExternalRedirect url={route.url} />
                  : route.element
              }
            />
          )
        })}

      </Routes>
    </Layout>



  )
}

export default App
