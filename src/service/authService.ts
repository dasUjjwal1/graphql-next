import request from "graphql-request";
import { Login } from "./types";
import { AppConfig } from "@/config/appConfig";
import { LOG_IN } from "@/gql/org";

export default class AuthService {
  NODE_GQL_URL = AppConfig.NODE_GQL_URL;
  logIn = async (payload: Login) => {
    try {
      const data = await request("http://localhost:4000/graphql", LOG_IN, {
        email: payload.email,
        password: payload.password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
}
