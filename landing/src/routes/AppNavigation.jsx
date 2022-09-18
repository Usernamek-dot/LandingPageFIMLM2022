import { Routes, Route } from "react-router-dom";
import { Layout } from "../common/Layout";
import { Contact, Home, Portfolio, Studies, Languages } from "../page/exports";
export const AppNavigation = () => {
  return (
    <>
      <div className="App">
        <Layout />
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
