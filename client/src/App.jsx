import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Choose from "./pages/choose/Choose";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export default function App() {
  return (
    <>
      <Header />
      {/*  <Home /> */}
      <Choose/>
      {/* <Login /> */}
      {/* <Register/> */}
      <Footer />
    </>
  );
}
