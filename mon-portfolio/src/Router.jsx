import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/*  <Route path="*" element={<PageError />} /> */}
      </Routes>
    </>
  );
}
export default Router;
