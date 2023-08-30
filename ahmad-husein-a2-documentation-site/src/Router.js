import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Docs from "./pages/Docs/Docs.js";
import DocsOverview from "./pages/Docs/DocsOverview.js";
import DocsNavbar from "./pages/Docs/DocsNavbar.js";
import DocsCard from "./pages/Docs/DocsCard.js";
import DocsTypography from "./pages/Docs/DocsTypography.js";
import DocsButton from "./pages/Docs/DocsButton.js";
import DocsImage from "./pages/Docs/DocsImage.js";
import DocsInput from "./pages/Docs/DocsInput.js";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="docs" element={<Docs />}>
        <Route index element={<Navigate to="overview" />} />
        <Route path="overview" element={<DocsOverview />} />
        <Route path="navbar" element={<DocsNavbar />} />
        <Route path="card" element={<DocsCard />} />
        <Route path="typography" element={<DocsTypography />} />
        <Route path="image" element={<DocsImage />} />
        <Route path="input" element={<DocsInput />} />
        <Route path="button" element={<DocsButton />} />
      </Route>
    </Routes>
  );
};

export default Router;
