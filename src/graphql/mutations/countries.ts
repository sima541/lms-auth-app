// src/graphql/queries/countries.ts
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }
`;
