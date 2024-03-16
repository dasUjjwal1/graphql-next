import { ApolloClient, InMemoryCache } from "@apollo/client";
import { AppConfig } from "./appConfig";

export class NetworkClient {
  uri = "http://localhost:8000/rust-graphql";
  token =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem(AppConfig.CREDENTIAL) as string)
      : null;
  constructor() {
    this.token = this.token;
    this.uri = this.uri;
  }
  client = new ApolloClient({
    uri: this.uri,
    cache: new InMemoryCache(),
    headers: { authorization: this.token ? this.token : "" },
  });
}
