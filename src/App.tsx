import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/education"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Education />
          </Suspense>
        }
      />
      <Route
        path="/skills"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
