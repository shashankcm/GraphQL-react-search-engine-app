import { gql } from "@apollo/client";

export const GET_ANIMALS = gql`
  query ListAnimals {
    animals {
      id
      image
      title
      price
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

export const GET_CATEGORIES = gql`
  query getCatagories {
    categories {
      slug
      category
      image
      id
    }
  }
`;

export const GET_ANIMAL = gql`
  query getAnimal($slug: String!) {
    animal(slug: $slug) {
      title
      image
      stock
      description
      price
    }
  }
`;

export const LIST_CATAGEORIES = gql`
  query listCatageories($slug: String!) {
    category(slug: $slug) {
      image
      category
      slug
      id
      animals {
        id
        title
        price
        image
      }
    }
  }
`;
