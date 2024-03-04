import { gql } from "graphql-request";

// export const CREATE_ORGANIZATION_DETAILS = gql`
//   mutation OrgDetailsMutation(
//     $city: String
//     $houseNumber: String
//     $pin: String
//     $state: String
//     $street: String
//     $employeeCount: Int!
//     $endTime: String!
//     $logo: String
//     $officeHour: Int!
//     $orgContact: String
//     $orgName: String!
//     $orgType: Int!
//     $startTime: String!
//     $totalLeaveCount: Int
//   ) {
//     CreateOrg(
//       employeeCount: $employeeCount
//       endTime: $endTime
//       officeHour: $officeHour
//       orgName: $orgName
//       orgType: $orgType
//       startTime: $startTime
//       totalLeaveCount: $totalLeaveCount
//       orgContact: $orgContact
//       logo: $logo
//       address: {
//         city: $city
//         houseNumber: $houseNumber
//         pin: $pin
//         state: $state
//         street: $street
//       }
//     )
//   }
// `;
// export const CREATE_ORGANIZATION_DETAILS = gql`
//   mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {
//     createOrganizationDetails(body: $body)
//   }
// `;
