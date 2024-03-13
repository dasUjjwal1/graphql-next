import { gql } from "@apollo/client";

export const CREATE_ORG_DETAILS = gql`
  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {
    createOrganizationDetails(body: $body)
  }
`;
