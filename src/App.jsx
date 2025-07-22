import { useEffect } from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
import './styles/app.scss'
import Layout from "./components/layout/layout"
import ScrollToTop from './components/utility/ScrollToTop';
import Homepage from "./pages/homepage/Homepage";
import Project1 from "./pages/1-qr-code-component-project/Project1";
import Project2 from "./pages/2-3-column-preview-card/Project2";
import Project3 from "./pages/3-launch-countdown-timer/Project3";
import Project7 from './pages/7-blog-preview-card/Project7';
import Project8 from './pages/8-profile-card-component/Project8';
import Project9 from './pages/9-nft-preview-card-component/Project9';
import Project10 from './pages/10-social-links-profile/Project10';
import Project11 from './pages/11-recipe-page/Project11';
import Project12 from './pages/12-product-preview-card-component/Project12';
import Project13 from './pages/13-four-card-feature-section/Project13';
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
import Project24 from './pages/24-loopstudios-landing-page/Project24';
import Project25 from './pages/25-room-homepage/Project25';
import Project26 from './pages/26-bookmark-landing-page/Project26';
import Project27 from './pages/27-results-summary-component/Project27';
import Project28 from './pages/28-product-list-with-cart/Project28';
import Project29 from './pages/29-mortgage-repayment-calculator/Project29';
import Project30 from './pages/30-interactive-comments/Project30';
import Project31 from './pages/31-multi-step-form/Project31';
import Project32 from './pages/32-browser-extensions-manager-ui/Project32';
import Project33 from './pages/33-interactive-card-details-form/Project33';
import Project34 from './pages/34-expenses-chart-component/Project34';
import Project35 from './pages/35-ping-coming-soon-page/Project35';
import Project36 from './pages/36-todo-app/Project36';
import Project37 from './pages/37-social-media-dashboard/Project37';
import Project38 from './pages/38-order-summary-component/Project38';
import Project39 from './pages/39-stats-preview-card-component/Project39';
import Project40 from './pages/40-social-proof-section/Project40';
import Project41 from './pages/41-single-price-grid-component/Project41';
import Project42 from './pages/42-base-apparel-coming-soon/Project42';
import Project43 from './pages/43-huddle-landing-page/Project43';
import Project44 from './pages/44-intro-component-with-signup-form/Project44';
import Project45 from './pages/45-static-job-listings/Project45';
import Project46 from './pages/46-notifications-page/Project46';
import Project47 from './pages/47-conference-ticket-generator/Project47';
import Project48 from './pages/48-clipboard-landing-page/Project48';


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
    { path: "/project24", element: <Project24 /> },
    { path: "/project25", element: <Project25 /> },
    { path: "/project26", element: <Project26 /> },
    { path: "/project27", element: <Project27 /> },
    { path: "/project28", element: <Project28 /> },
    { path: "/project29", element: <Project29 /> },
    { path: "/project30", element: <Project30 /> },
    { path: "/project31", element: <Project31 /> },
    { path: "/project32", element: <Project32 /> },
    { path: "/project33", element: <Project33 /> },
    { path: "/project34", element: <Project34 /> },
    { path: "/project35", element: <Project35 /> },
    { path: "/project36", element: <Project36 /> },
    { path: "/project37", element: <Project37 /> },
    { path: "/project38", element: <Project38 /> },
    { path: "/project39", element: <Project39 /> },
    { path: "/project40", element: <Project40 /> },
    { path: "/project41", element: <Project41 /> },
    { path: "/project42", element: <Project42 /> },
    { path: "/project43", element: <Project43 /> },
    { path: "/project44", element: <Project44 /> },
    { path: "/project45", element: <Project45 /> },
    { path: "/project46", element: <Project46 /> },
    { path: "/project47", element: <Project47 /> },
    { path: "/project48", element: <Project48 /> },

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
