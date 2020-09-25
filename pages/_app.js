import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <div className="md:px-20 md:m-auto">
        <Header />
        <Component {...pageProps} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
