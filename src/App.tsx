// Modules
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import "./App.css";
import Login from "./pages/login";
import RegisterInfluencer from "./pages/register_influencer";
import RegisterBrand from "./pages/register_brand";

const Home = () => {
  return (
    <>
      <p>Home</p>
    </>
  );
};

export default function App() {
  // Check for authenication cookie
  const [cookies] = useCookies(["authentication"]);

  //
  const cookies_keys =
    cookies && typeof cookies == "object" && Object.keys(cookies);
  console.log(typeof cookies, cookies_keys);

  //
  return (
    <Router>
      {cookies_keys.length == 0 ? (
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register-influencer" element={<RegisterInfluencer />} />
          <Route path="/register-brand" element={<RegisterBrand />} />
        </Routes>
      ) : (
        <Routes>
          {/* Private Routes */}

          {/* Integrate brand */}
          <Route path="/" element={<Home />} />
          {/* Integrate influencer route */}
        </Routes>
      )}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register-influencer" element={<RegisterInfluencer />} />
        <Route path="/register-brand" element={<RegisterBrand />} />

        {/* Private Routes */}
        {/* <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
        /> */}
      </Routes>
    </Router>
  );
}
