import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import Appshell from "./components/Appshell/Appshell";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@mantine/core";

function Providers({ children }) {
  return (
    <MantineProvider
      theme={{
        colors: { brand: ["#3347B0"] },
        fontFamily: "Segoe UI, Sans-serif",
        headings: { fontFamily: "Segoe UI, Sans-serif" },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Global
        styles={[
          '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap")',
          '@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap")',
        ]}
      />
      <BrowserRouter>{children}</BrowserRouter>
    </MantineProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <Appshell>
        <App />
      </Appshell>
    </Providers>
  </React.StrictMode>
);
