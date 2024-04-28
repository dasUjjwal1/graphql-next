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
