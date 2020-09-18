import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
  const features = [
    {
      name: "Project Del Sol",
      image: "img-del-sol",
    },
    {
      name: "228B Tower",
      image: "img-228b",
    },
    {
      name: "Le Prototype",
      image: "img-prototype",
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-img-paramour  bg-no-repeat flex items-center h-screen px-8 text-white">
        <div>
          <h1 className="font-bold leading-none mb-4 text-4xl tracking-tight">
            Project Paramour
          </h1>
          <p className="leading-6 mb-12 text-left text-sm">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <Button className="font-bold text-sm">See Our Portfolio</Button>
        </div>
      </section>

      <section className="px-8">
        <div className="py-12">
          <hr className="border-light-grey w-16 mb-12" />
          <h1 className="font-bold mb-10 leading-none text-very-dark-blue text-4xl tracking-tight">
            Welcome to <br /> Arch Studio
          </h1>
          <div className="leading-6 text-sm text-dark-grey">
            <p className="mb-6">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p className="mb-6">
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p className="mb-6">
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-img-small-team  bg-no-repeat flex items-center h-screen px-8 text-white">
        <div>
          <h1 className="font-bold leading-none mb-8 text-4xl tracking-tight">
            Small team, <br /> big ideas
          </h1>
          <Button className="font-bold text-sm">About Us</Button>
        </div>
      </section>

      <section className="px-8 py-12">
        <div>
          <h1 className="font-bold mb-8 text-4xl tracking-tight">Featured</h1>
          {features.map((feature) => {
            return (
              <Card
                bgImg={feature.image}
                name={feature.name}
                className="my-4"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
