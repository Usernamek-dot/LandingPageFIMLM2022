import { Routes, Route } from "react-router-dom";
import { NotFound } from "../auth/NotFound";
import { Footer, Layout } from "../common/exports";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
