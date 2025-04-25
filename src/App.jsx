import { useEffect } from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
import './styles/app.scss'
import Layout from "./components/layout/layout"

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
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound/NotFound';



const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <p> Redirecting... </p>;

}



function App() {

  const routes = [
    { path: "/frontend-mentor-challenges-using-react", element: <Homepage /> },
    { path: "/frontend-mentor-challenges-using-react/project1", element: <Project1 /> },
    { path: "/frontend-mentor-challenges-using-react/project2", element: <Project2 /> },
    { path: "/frontend-mentor-challenges-using-react/project3", element: <Project3 /> },
    { path: "/frontend-mentor-challenges-using-react/project7", element: <Project7 /> },
    { path: "/frontend-mentor-challenges-using-react/project8", element: <Project8 /> },
    { path: "/frontend-mentor-challenges-using-react/project9", element: <Project9 /> },
    { path: "/frontend-mentor-challenges-using-react/project10", element: <Project10 /> },
    { path: "/frontend-mentor-challenges-using-react/project11", element: <Project11 /> },
    { path: "/frontend-mentor-challenges-using-react/project12", element: <Project12 /> },
    { path: "/frontend-mentor-challenges-using-react/project13", element: <Project13 /> },
    { path: "/frontend-mentor-challenges-using-react/project14", element: <Project14 /> },
    { path: "/frontend-mentor-challenges-using-react/project15", element: <Project15 /> },
    { path: "/frontend-mentor-challenges-using-react/16-newsletter-sign-up", element: <Project16 /> },
    { path: "/rest-api-countries-react", url: "https://sumaiyakawsar.github.io/rest-api-countries-react/" },
    { path: "/space-tourism-website", url: "https://sumaiyakawsar.github.io/space-tourism-website/" },
    { path: "/sk-advice-generator", url: "https://sumaiyakawsar.github.io/sk-advice-generator/" },

    { path: "*", element: <NotFound /> },

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
