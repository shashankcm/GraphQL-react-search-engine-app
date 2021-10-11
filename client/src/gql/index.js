import { gql } from "@apollo/client";

export const GET_ANIMALS = gql`
  query ListAnimals {
    animals {
      id
      slug
    }
  }
`;

export const GET_MAIN_CARDS = gql`
  query getMainCards {
    mainCards {
      image
      title
    }
  }
`;
