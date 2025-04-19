import { useEffect } from 'react'

import { Routes, Route, useLocation } from "react-router-dom";
import './styles/app.scss'

import Project1 from "./pages/1-qr-code-component-project/Project1";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from './components/footer/Footer';
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

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   // Add background change logic based on the current route
  //   if (location.pathname === "/frontend-mentor-challenges-using-react") {
  //     document.body.style.background = '#f0f8ff'; // Light Blue for Home
  //   } else if (location.pathname === "/frontend-mentor-challenges-using-react/project1") {
  //     document.body.style.background = '#ffebcd'; // Blanched Almond for About
  //   } else if (location.pathname === "/frontend-mentor-challenges-using-react/project2") {
  //     document.body.style.background = '#d3d3d3'; // Light Gray for Contact
  //   } else if (location.pathname === "/frontend-mentor-challenges-using-react/project3") {
  //     document.body.style.background = '#d3d3d3'; // Light Gray for Contact
  //   }
  // }, [location]);

  return (
    <main >
      <Header />
      <Routes>
        <Route
          exact
          path="/frontend-mentor-challenges-using-react"
          element={<Homepage />}
        />
        <Route
          path="/frontend-mentor-challenges-using-react/project1"
          element={<Project1 />}
        />


        <Route
          path="/frontend-mentor-challenges-using-react/project2"
          element={<Project2 />}
        />
        <Route
          path="/frontend-mentor-challenges-using-react/project3"
          element={<Project3 />}
        />
        <Route
          path="/frontend-mentor-challenges-using-react/project7"
          element={<Project7 />}
        />   <Route
          path="/frontend-mentor-challenges-using-react/project8"
          element={<Project8 />}
        />
        <Route
          path="/frontend-mentor-challenges-using-react/project9"
          element={<Project9 />}
        />

        <Route
          path="/frontend-mentor-challenges-using-react/project10"
          element={<Project10 />}
        />


        <Route
          path="/frontend-mentor-challenges-using-react/project11"
          element={<Project11 />}
        />


        <Route
          path="/frontend-mentor-challenges-using-react/project12"
          element={<Project12 />}
        />


        <Route
          path="/frontend-mentor-challenges-using-react/project13"
          element={<Project13 />}
        />

        <Route
          path="/frontend-mentor-challenges-using-react/project14"
          element={<Project14 />}
        />
        <Route
          path="/frontend-mentor-challenges-using-react/project15"
          element={<Project15 />}
        />

        <Route
          path="/frontend-mentor-challenges-using-react/project16"
          element={<Project16 />}
        />
        {/*   <Route
          path="/projects"
          element={<Projects />}
        /> */}
      </Routes>

      <Footer />
    </main>
  )
}

export default App
