import { gql } from "@apollo/client";

export const CREATE_ORG_DETAILS = gql`
  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {
    createOrganizationDetails(body: $body) {
      message
    }
  }
`;
export const GET_ALL_ORGANIZATION = gql`
  query GetAllOrganization {
    getAllOrganization {
      id
      orgName
      orgId
      isActive
      lastSubscribe
      latitude
      longitude
      workingModel
      address {
        city
        street
        housenumber
        state
        pin
      }
      employeeCount
      orgType
      totalLeaveCount
      establishedOn
      holiday {
        id
        name
        date
      }
      documents
      logo
      startTime
      endTime
      financialYearStart
      financialYearEnd
      department
      notWorkingDays
      orgContact
      createdAt
      updatedAt
    }
  }
`;
export const UPDATE_ORGANIZATION_DETAILS = gql`
  mutation UpdateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {
    updateOrganizationDetails(body: $body) {
      message
    }
  }
`;
