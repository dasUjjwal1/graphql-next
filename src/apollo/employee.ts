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
  mutation MyMutation($email: EmailAddress!, $password: String!) {
    LogInOrganization(email: $email, password: $password) {
      token
      org {
        address
        email
        employeeCount
        id
        location
        mobile
        name
        orgType
        picturePath
      }
    }
  }
`;
