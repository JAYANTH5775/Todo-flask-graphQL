import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./Keycloak";
import Todos from "./Todos";
import Topnav from "./Topnav";

function App() {
  return (
    <React.Fragment>
      {/* <ReactKeycloakProvider authClient={keycloak}> */}
      <Topnav></Topnav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Todos />} />
        </Routes>
      </BrowserRouter>
      {/* </ReactKeycloakProvider> */}
    </React.Fragment>
  );
}

export default App;
