import { gql } from "@apollo/client";

export const REGISTER_ORGANIZATION = gql`
  mutation Mutation($body: OrganizationRegister!) {
    createOrganization(body: $body)
  }
`;

export const LOG_IN_ORGANIZATION = gql`
  query LoginOrganization($body: OrganizationLogin!) {
    loginOrganization(body: $body) {
      id
      name
      email
      isAdmin
      mobile
      picturePath
      paymentStructure
      location
      address {
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
`;
