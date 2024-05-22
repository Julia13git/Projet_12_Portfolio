import React, { useState } from "react";
import { projectList } from "../../datas/projectList";
import "./carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ id }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      {projectList
        .filter((project) => project.id === id)
        .map((project) => {
          const pictures = project.pictures;

          const nextSlide = () => {
            setCurrentImage((prevSlide) =>
              prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
            );
          };
          const prevSlide = () => {
            setCurrentImage((prevSlide) =>
              prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
            );
          };

          return (
            <section className="carousel" key={project.id}>
              <img src={project.pictures[currentImage]} alt={project.title} />
              <p>
                {currentImage + 1}/{pictures.length}
              </p>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="fa-solid fa-chevron-left"
                onClick={prevSlide}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fa-solid fa-chevron-right"
                onClick={nextSlide}
              />
            </section>
          );
        })}
    </>
  );
}

export default Carousel;
