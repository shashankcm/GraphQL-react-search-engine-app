import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";

import { useQuery } from "@apollo/client";
import { GET_MAIN_CARDS } from "../../gql/index";

function MainHero() {
  const { loading, error, data } = useQuery(GET_MAIN_CARDS);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt={animals.rhino} />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card) => {
            return (
              <div className="card" key={card.image}>
                <h3>{card.title}</h3>
                <img
                  src={animals[card.image]}
                  style={{ width: "100%" }}
                  alt={card.image}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
