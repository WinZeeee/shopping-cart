import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
