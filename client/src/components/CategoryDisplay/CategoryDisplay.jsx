import React, { useState } from "react";
import "./CategoryDisplay.css";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../gql/index";

function CategoryDisplay() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div className="CategoryDisplay">
      <Container className="CategoryDisplay-container">
        {data.categories.map((category) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              className="CategoryDisplay-card-container"
              key={category.slug}
            >
              <div className="CategoryDisplay-card">
                <img src={animals[category.image]} alt={category.image} />
              </div>
              <h3>{category.category}</h3>
            </Link>
          );
        })}
      </Container>
    </div>
  );
}

export default CategoryDisplay;
