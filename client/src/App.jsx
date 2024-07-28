import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Catalog from "./pages/catalog/Catalog";
import Choose from "./pages/choose/Choose";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Offer from "./pages/offer/Offer";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth">
            <Route path="register/*" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/catalog/*" element={<Catalog />} />
          <Route path="/details/*" element={<Details />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/choose/*" element={<Choose/>} />
        </Routes>
      </div>
      {/* <Offer/> */}
      <Footer />
    </>
  );
}
