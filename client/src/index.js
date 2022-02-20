import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import SignInOutContainer from "./containers/SignInOutContainer";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth" element={<SignInOutContainer />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);