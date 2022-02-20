import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Sharedtextarea from "./components/Sharedtextarea";
import SignInOutContainer from "./containers/SignInOutContainer";
import VideoChat from "./VideoChat";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth" element={<SignInOutContainer />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/summorize" element={<Sharedtextarea />} />
      <Route path="/video" element={<VideoChat />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);