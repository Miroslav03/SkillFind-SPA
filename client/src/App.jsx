import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Catalog from "./pages/catalog/Catalog";
import Choose from "./pages/choose/Choose";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

export default function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Choose/> */}
      {/*       <Login /> */}
      {/* <Register/> */}
      {/* <Catalog /> */}
      {/*    <Details/> */}
       <Profile/>
      <Footer />
    </>
  );
}
