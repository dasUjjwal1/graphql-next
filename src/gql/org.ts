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
        parent
        access
      }
      lastSubscribe
      token
    }
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
        parent
        access
      }
      lastSubscribe
      token
    }
  }
`;

export const CREATE_ROLE = gql`
  mutation CreateRole($body: RoleInput!) {
    createRole(body: $body)
  }
`;

export const GET_ALL_ROLE = gql`
  query GetAllRole {
    getAllRole {
      id
      name
      parent
      access
    }
  }
`;
