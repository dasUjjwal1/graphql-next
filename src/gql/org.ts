import { gql } from "@apollo/client";

export const REGISTER_ORGANIZATION = gql`
  mutation CreateOrganization($body: OrganizationRegister!) {
    createOrganization(body: $body) {
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
      lastSubscribe
      token
    }
  }
`;

export const LOG_IN_ORGANIZATION = gql`
  query RootQuery($body: OrganizationLogin!) {
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
      lastSubscribe
      token
    }
  }
`;
