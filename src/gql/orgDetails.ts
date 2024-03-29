import { gql } from "@apollo/client";

export const CREATE_ORG_DETAILS = gql`
  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {
    createOrganizationDetails(body: $body)
  }
`;
export const GET_ALL_ORGANIZATION = gql`
  query GetAllOrganization {
    getAllOrganization {
      id
      orgName
      orgId
      isActive
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
      officeHour
      startTime
      endTime
      financialYearStart
      financialYearEnd
      depertment
      notWorkingDays
      orgContact
      createdAt
      updatedAt
    }
  }
`;
