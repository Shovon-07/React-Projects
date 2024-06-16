import { lazy, Suspense } from "react";
import "./assets/Css/App.css";

//___ Components ___//
import Loader from "./Components/Loader/Loader";

//___ Pages ___//
const TempRemote = lazy(() => import("./Pages/TemperatureRemote/TempRemote"));

function App() {
  return (
    <>
      <h1>React</h1>
      <Suspense fallback={<Loader />}>
        <TempRemote />
      </Suspense>
    </>
  );
}

export default App;
