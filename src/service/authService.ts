import request from "graphql-request";
import { Login } from "@/types/authType";
import { Register } from "@/types/authType";
import { AppConfig } from "@/config/appConfig";
import { LOG_IN, REGISTER_ORGANIZATION } from "@/gql/org";

export default class AuthService {
  NODE_GQL_URL = "http://localhost:4000/graphql";
  logIn = async (payload: Login) => {
    try {
      const data = await request(this.NODE_GQL_URL, LOG_IN, {
        email: payload.email,
        password: payload.password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  registerOrg = async (payload: Register) => {
    try {
      const data = await request(this.NODE_GQL_URL, REGISTER_ORGANIZATION, {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        location: payload.location,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
}
