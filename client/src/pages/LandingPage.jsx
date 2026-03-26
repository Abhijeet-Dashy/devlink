import React from "react";
import LandingPageNavbar from "../components/LandingPageNavbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <>
      <LandingPageNavbar />
      <Hero/>
      <Footer/>
    </>
  );
}