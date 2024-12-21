import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Preloader from './components/Preloader/index';
import BackToTopButton from "./components/BackToTopButton";
import CardList from "./components/CardList";
import ServiceDetails from "./pages/ServiceDetails";
import PopularService from "./components/PopularService";
import TeamDetails from "./pages/TeamDetails";
import Team from "./components/Team";
import Register from "./pages/register";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/card" element={<CardList />} /> */}
      {/* <Route path="/card/:id" element={<ServiceDetails />} /> */}
      <Route path="/popularservice" element={<PopularService />} />
      <Route path="/popularservice/:id" element={<ServiceDetails />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:id" element={<TeamDetails />} />
      <Route path="/register" element={<Register />} />
      
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading process (e.g., fetching data)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // After 3 seconds, loading will be false
    }, 1000);
  }, []);
  return (
    <>
    {loading ? (
        <Preloader />  // Show spinner while loading
      ) : (
        <RouterProvider router={router} />
      )}
     <BackToTopButton/>
    </>
  );
}

export default App;
