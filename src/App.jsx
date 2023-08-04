/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";

import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StateContext from "./store/StateContext";
import axios from "axios";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let { loadShoes, loadClothes, loadAccessories } = useContext(StateContext);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3000/api/shoes/")
      .then((response) => {
        // console.log(response.data);
        loadShoes(response.data);
      })
      .catch((error) => console.log(error.message));

    axios
      .get("http://localhost:3000/api/clothes/")
      .then((response) => {
        // console.log(response.data);
        loadClothes(response.data);
      })
      .catch((error) => console.log(error.message));
    axios
      .get("http://localhost:3000/api/accessories/")
      .then((response) => {
        // console.log(response.data);
        loadAccessories(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Router>
        <Header />

        {!document.cookie.includes("tokenUsuario") ? (
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes" element={<Home show={"clothes"} />} />
            <Route path="/shoes" element={<Home show={"shoes"} />} />
            <Route
              path="/accessories"
              element={<Home show={"accessories"} />}
            />
<Route path="/details/:product/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>La página no existe</h2>} />
          </Routes>
        )}


        <Footer />
      </Router>
    </>
  );
}

export default App;
