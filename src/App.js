import React, { useEffect } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "firebase/compat/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";

const promise = loadStripe(
  "pk_test_51KclzqSACJq7xwFlPA3WgzsytXUlfpAsnUgyG5CFrvtBBNU5H0ODOVT5IVazkmJ42g4AAlsY3noOt8WMdteQyGpu00Qcs7QfHA"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

//pk_test_51KclzqSACJq7xwFlPA3WgzsytXUlfpAsnUgyG5CFrvtBBNU5H0ODOVT5IVazkmJ42g4AAlsY3noOt8WMdteQyGpu00Qcs7QfHA

// sk_test_51KclzqSACJq7xwFlrtBF153IUBv2ZLqPHbn3RNP2ySoN5iiA1Qgq0x7mrqJZAWq1VeISW3MVCabS94yJ9YGAUcgv00Y3vBDl2E
