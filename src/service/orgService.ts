import { AppConfig } from "@/config/appConfig";
import { ROLE_MUTATION_CREATE, ROLE_QUERY } from "@/gql/org";
import { AuthContext } from "@/provider/AuthContext";
import { Role } from "@/types/appTypes";
import { GraphQLClient } from "graphql-request";
import { useContext } from "react";

export default class OrgService {
  private state = useContext(AuthContext);
  private token: string | null = this.state.auth.token;
  private NODE_GQL_URL = AppConfig.NODE_GQL_URL;
  header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };
  getAllRoles = async () => {
    try {
      const graphQLClient = new GraphQLClient(this.NODE_GQL_URL, {
        headers: this.header,
      });
      const data = await graphQLClient.request(ROLE_QUERY);
      return data;
    } catch (error) {
      throw error;
    }
  };
  createRole = async (params: Role) => {
    try {
      const graphQLClient = new GraphQLClient(this.NODE_GQL_URL, {
        headers: this.header,
      });
      const data = await graphQLClient.request(ROLE_MUTATION_CREATE, {
        name: params.name,
        position: params.position,
        parent: params.parent,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
}
