import React from "react";
import AllTour from "./AllTour/AllTour";
import Banner from "./Banner/Banner";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllTour />
     <Review/>
    </div>
  );
};

export default Home;
