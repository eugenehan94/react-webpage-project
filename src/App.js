import React, { useState } from "react";

import Feedback from "./components/Feedback";
import NavBar from "./components/NavBar";
import Head from "./components/Head";

import About from "./components/About";
import AboutJoint from "./components/AboutJoint";

import AboutAtm from "./components/AboutAtm";

import Review from "./components/Review";

import Offers from "./components/Offers";
import offerData from "./data/OfferData";

import Footer from "./components/Footer";

function App() {
  const [modal, setModal] = useState(false);
  const [offerList, setOfferList] = useState(offerData);
  const [offerItem, setOfferItem] = useState(offerData);

  const closeModal = () => {
    setModal(false);
  };

  const removeOffer = (id) => {
    const newOfferList = offerList.filter((offers) => offers.id !== id);
    setOfferList(newOfferList);
  };

  return (
    <div>
      <button onClick={() => setModal(true)} className="feedback-btn">
        Feedback
      </button>

      <NavBar />
      <Head />
      {modal ? <Feedback show={modal} closeModal={closeModal} /> : null}

      <div className="faq-container">
        <h1>About</h1>
        <div className="underline"></div>
        <About />

        <h1>Accounts</h1>
        <div className="underline"></div>
        <h2>Joint accounts</h2>
        <AboutJoint />

        <h2>ATM</h2>
        <AboutAtm />
      </div>

      <Offers offerList={offerList} removeOffer={removeOffer} />

      <Review />
      <Footer />
    </div>
  );
}

export default App;
