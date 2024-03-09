/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import "../styles.css";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/software.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  const goAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{ color: "white", position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          background: "none",
          borderRadius: "50%",
          border: "none",
        }}
        onClick={goAbout}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </button>
    </section>
  );
};

Home.defaultProps = {
  name: "Youssef Benormane",
  title: "Web Developer & Data Analyst",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
