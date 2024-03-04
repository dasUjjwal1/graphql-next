import { graphql } from "@/graphql/gql";

export const REGISTER_ORGANIZATION = graphql(
  `
    mutation RegisterOrg(
      $email: String!
      $location: Int!
      $name: String!
      $password: String!
    ) {
      createOrganization(
        body: {
          email: $email
          location: $location
          name: $name
          password: $password
        }
      ) {
        id
        name
        email
        mobile
        picturePath
        paymentStructure
        location
        address {
          id
          city
          street
          housenumber
          state
          pin
        }
        roles {
          id
          name
          position
          parent
        }
        paid
        token
      }
    }
  `
);

export const LOG_IN_ORGANIZATION = graphql(
  `
    query OrgLoginQuery($email: String!, $password: String!) {
      loginOrganization(body: { email: $email, password: $password }) {
        id
        name
        email
        mobile
        isAdmin
        picturePath
        paymentStructure
        location
        address {
          id
          city
          street
          housenumber
          state
          pin
        }
        roles {
          id
          name
          position
          parent
        }
        paid
        token
      }
    }
  `
);
