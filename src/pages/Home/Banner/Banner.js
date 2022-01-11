import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState();
  useEffect(() => {
    fetch("banner.json")
      .then(res => res.json())
    .then(data=>setBanners(data))
  },[])
  return (
    <div>
      <Carousel fade >
      {
banners?.map(banner=> 
  <Carousel.Item interval={1200} key={banner.sl}>
    <img
      className="banner-img"
      src={banner.src}
      alt="Slide"
      />
    <Carousel.Caption className='text-warning'>
      <h3>Enjoy your stay</h3>
      <p>Discover amazing places at exclusive deals</p>
      </Carousel.Caption>
    </Carousel.Item>
          )
        }
        </Carousel>

    </div>
  );
};

export default Banner;