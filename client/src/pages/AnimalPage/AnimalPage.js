import React from "react";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./AnimalPage.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIMAL } from "../../gql/index.js";

function AnimalPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ANIMAL, {
    variables: { slug },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const {
    animal: { title, stock, description, price, image },
  } = data;
  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <img
            src={animals[image]}
            className="product-img"
            style={{ marginRight: "1rem" }}
            alt={animals[image]}
          />
          <div className="text-container">
            <h1>{title}</h1>
            <div className="star-container">
              <img src={star} alt="rating-star" />
              <img src={star} alt="rating-star" />
              <img src={star} alt="rating-star" />
              <img src={star} alt="rating-star" />
              <img src={star} alt="rating-star" />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{stock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About this Animal</h4>
              {description.map((des, index) => (
                <li key={index}>{des}</li>
              ))}
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>CAD$ {price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: "2rem" }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AnimalPage;
