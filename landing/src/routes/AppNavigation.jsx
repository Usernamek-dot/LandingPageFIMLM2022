import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../navigation/Sidebar";
import { Contact, Home, Portfolio, Studies, Languages } from "../page/exports";
export const AppNavigation = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="studies" element={<Studies />} />
          <Route path="languages" element={<Languages />} />
        </Routes>
      </div>
    </>
  );
};
