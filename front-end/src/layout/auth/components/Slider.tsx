import React from "react";
import logo from "../../../assets/logo.png";
import sliderImage from "../../../assets/slider-image.svg";

const Slider = () => {
  return (
    <section className="hidden md:block lg:block w-full place-items-center lg:grid bg-no-repeat bg-cover">
      <div className="fixed top-0 left-0 hidden md:block lg:block p-6 lg:block lg:px-12">
        <a href="/" className="flex items-center space-x-2">
          <img alt="LOGO" className="mb-10" width={90} height={36} src={logo} />
        </a>
      </div>
      <div className="w-full place-items-center max-w-lg lg:grid">
        <img className="w-auto" src={sliderImage} alt="d" />
        <div className="keen-slider my-8">
          <div className="keen-slider__slide number-slide1 w-full flex flex-col items-center justify-center">
            <h1 className="leading-7 text-2xl font-semibold text-slate-600 dark:text-navy-100">
              Commence your journey with our dOpz software today!
            </h1>
            <p className="mt-3 text-center text-base">
              Unlock a comprehensive view of your infrastructure, from hardware
              to software dependencies, enabling smarter decision-making and
              proactive problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
