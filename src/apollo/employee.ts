import { gql } from "@apollo/client";

export const ROLE_QUERY = gql`
  query {
    getAllRole {
      roleId
      roleName
      position
    }
  }
`;
export const ROLE_MUTATION = gql`
  mutation ($rolename: String!, $position: Int!, $parent: Int) {
    createRole(
      body: { roleName: $rolename, position: $position, parent: $parent }
    ) {
      roleId
      roleName
      position
      parent
    }
  }
`;
export const LOG_IN = gql`
  mutation ($email: String!, $password: String!) {
    loginOrg(body: { orgEmail: $email, orgPassword: $password }) {
      user {
        id
        oragnizationName
        orgImage
        orgEmail
        orgImage
        orgType
        country
      }
      token
    }
  }
`;
