import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Contact, Home, About, Portfolio } from "../page/exports";
export const AppNavigation = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <h1>Welcome to React Router! 👜 </h1>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
};
