import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import GlobalStyleReset from "./globalstyles/GlobalStyleReset.jsx";
import GlobalStyleFont from "./globalstyles/GlobalStyleFont.jsx";
import GlobalStyleCommon from "./globalstyles/GlobalStyleCommon.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyleReset />
    <GlobalStyleFont />
    <GlobalStyleCommon />
    <App />
  </React.StrictMode>
);
