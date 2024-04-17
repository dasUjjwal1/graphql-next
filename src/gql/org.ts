import { gql } from "@apollo/client";

export const REGISTER_ORGANIZATION = gql`
  mutation CreateOrganization($body: OrganizationRegister!) {
    createOrganization(body: $body) {
      name
      email
      isActive
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
      verification {
        identityProof
        addressProof
      }
      lastSubscribe
      createdAt
      updatedAt
      token
    }
  }
`;

export const LOG_IN_ORGANIZATION = gql`
  query LoginOrganization($body: OrganizationLogin!) {
    loginOrganization(body: $body) {
      name
      email
      isActive
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
      verification {
        identityProof
        addressProof
      }
      lastSubscribe
      createdAt
      updatedAt
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
export const UPDATE_ROLE = gql`
  mutation UpdateRoleById($body: RoleInput!) {
    updateRoleById(body: $body)
  }
`;
