import React from "react";
import "../styles/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="md:px-20 md:m-auto">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
