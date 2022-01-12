import React from "react";
import AllTour from "./AllTour/AllTour";
import Banner from "./Banner/Banner";
import Process from "./Process/Process";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllTour />
      <Process/>
     <Review/>
    </div>
  );
};

export default Home;
