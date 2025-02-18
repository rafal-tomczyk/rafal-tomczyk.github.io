import React, { Suspense, lazy } from "react";
import Grid from "./components/Grid";
import data from "./data";

const Portfolio = lazy(() => import("./Portfolio"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="container">
      <Grid />
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
