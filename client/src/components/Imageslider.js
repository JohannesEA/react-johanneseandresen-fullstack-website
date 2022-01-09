// src/components/ImageSlider.js
import Button from "../components/Button";

import React, { useState } from "react";
// 1.
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

import "./imageslider.css";

// 2.
const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <GrNext />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <GrPrevious />
    </div>
  );
};

const ImageSlider = ({ images }) => {
  // 3.
  const [imageIndex, setImageIndex] = useState(0);

  // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    slidesToScroll: 1,

    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 5.
  const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image._id}
      >
        <div className="slideWrapper">
          {image.code ? (
            image.code
          ) : (
            <img className="slideimage" src={image.logo} alt={image._id} />
          )}
        </div>
        {/* <div>Type: {image.type}</div>
        <br></br>
        <div>Detaljer: {image.details}</div>
        <br></br>
        <div>Pris: {image.price} ,-</div>
        <br></br> */}

        <Button
          bc="color-1"
          onClick={() => (window.location.href = image.link)}
          shadow="#f0f8ff"
          text="Mer Info"
        />
        {/* <button  onClick={() => (window.location.href = image.url)}> Mer Info</button> */}
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
