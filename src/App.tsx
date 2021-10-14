import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

import  "./styles/global";

export default function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}
