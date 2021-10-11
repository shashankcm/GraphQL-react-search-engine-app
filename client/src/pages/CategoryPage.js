import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery } from "@apollo/client";
import { LIST_CATAGEORIES } from "../gql/index";

function CategoryPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(LIST_CATAGEORIES, {
    variables: { slug },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const {
    category: { animals, id, category },
  } = data;

  console.log(id);

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {category}
          <CardDisplay animals={animals} key={id} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
