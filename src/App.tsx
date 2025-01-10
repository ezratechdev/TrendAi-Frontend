// Modules
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import "./App.css";
import Login from "./pages/login";
import RegisterInfluencer from "./pages/register_influencer";
import RegisterBrand from "./pages/register_brand";
import CreateCampaign from "./pages/brand/create-campaign";

const Home = () => {
  return(
    <p>Home</p>
  )
}


export default function App() {
  // Check for authenication cookie
  const [cookies] = useCookies(["authentication"]);

  //
  const cookies_keys =
    cookies && typeof cookies == "object" && Object.keys(cookies);
  console.log(typeof cookies, cookies_keys.length, cookies);

  //
  return (
    <Router>
      {cookies_keys.length == 0 ? (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register-influencer" element={<RegisterInfluencer />} />
          <Route path="/register-brand" element={<RegisterBrand />} />
        </Routes>
      ) : (
        <Routes>
          {/* Private Routes */}
          {
            cookies && cookies.authenication && Object.keys(cookies.authenication).length > 0 && cookies.authenication.user == "brand"
            ?
            <Route path="/" element={<CreateCampaign />} />
            :
            <Route path="/" element={<Home />} />
          }
          {/* Integrate brand */}
          {/* Integrate influencer route */}
        </Routes>
      )}
    </Router>
  );
}
