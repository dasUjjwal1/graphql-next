import { graphql } from "@/graphql";

export const CreateUser = graphql(`
  mutation CreateUser($body: UserRegister!) {
    createUser(body: $body) {
      name
      email
      isActive
      isAdmin
      mobileNo
      isDelete
      gmtMinuteOffset
      timeZone
      picturePath
      paymentStructure
      location
      address {
        city
        street
        houseNumber
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
`);
export const LoginUser = graphql(`
  query LoginUser($body: UserLogin!) {
    loginUser(body: $body) {
      name
      email
      isActive
      isAdmin
      mobileNo
      isDelete
      gmtMinuteOffset
      timeZone
      picturePath
      paymentStructure
      location
      address {
        city
        street
        houseNumber
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
`);

export const GetAllOrganization = graphql(`
  query GetAllOrganization {
    getAllOrganization {
      id
      userId
      isActive
      lastSubscribe
      latitude
      longitude
      workingModel
      address {
        city
        street
        buildingNumber
        state
        pin
      }
      employeeCount
      totalLeaveCount
      holiday {
        id
        name
        date
      }
      documents
      startTime
      endTime
      department {
        id
        name
      }
      notWorkingDays
      orgContact
      paidLeavePm
      sickLeavePm
      remoteClockIn
      locationRequired
      gracePeriod
      createdAt
      updatedAt
    }
  }
`);
