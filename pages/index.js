import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="bg-img-paramour bg-no-repeat flex items-center h-screen px-8 text-white">
        <div>
          <h1 className="capitalize font-bold leading-none mb-4 text-5xl">
            project paramour
          </h1>
          <p className="leading-6 mb-12 text-left text-sm">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <Button>See Our Portfolio</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
