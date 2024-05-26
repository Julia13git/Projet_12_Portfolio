import { Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import PageError from "./pages/PageError";

function Router() {
  return (
    <Switch>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </Switch>
  );
}
export default Router;

// function Router() {
//   return (
//     <>
//       <Switch>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/project/:id" element={<ProjectPage />} />
//         <Route path="*" element={<PageError />} />
//       </Switch>
//     </>
//   );
// }
// export default Router;
