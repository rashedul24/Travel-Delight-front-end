import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css'
import customer from '../../../images/male-avatar6.jpg';

const Review = () => {
  return (
    <div>
    <h1 className="text-primary text-center my-4">Customer Reviews</h1>
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="review">
            <h4 className="fst-italic">
              "Great job, I will definitely be ordering again! After using
              booking tour my business skyrocketed! Man, this thing is getting
              better and better as I learn more about it. "
            </h4>
            <div className="d-flex">
              <img
                className="rounded-circle"
                src={customer}
                alt="Second slide"
              />
              <div className="mt-5 pt-5">
                <h4>Mr. Hasan</h4>
                <small>Bangladesh.</small>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="review">
            <h4 className="fst-italic">
              "Needless to say we are extremely satisfied with the results.
              Booking tour was the best investment I ever made. Nice work on
              your booking tour. Booking tour impressed."
            </h4>
            <div className="d-flex">
              <img
                className="rounded-circle"
                src={customer}
                alt="Third slide"
              />
              <div className="mt-5 pt-5">
                <h4>Mr. Akram</h4>
                <small>Pakistan.</small>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="review">
            <h4 className="fst-italic">
              “This was an amazing trip! There were so many highlights... our
              outstanding, kind, patient, amazing leader Gustavo!! What an
              absolute saint. He was so organized and insightful!”{" "}
            </h4>
            <div className="d-flex">
              <img
                className="rounded-circle"
                src={customer}
                alt="First slide"
              />
              <div className="mt-5 pt-5">
                <h4>Mr. Naidu</h4>
                <small>Delhi, India.</small>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  </div>
  );
};

export default Review;