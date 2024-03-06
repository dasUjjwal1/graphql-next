import next from "next";
import { listenToEmployeeStream } from "./streamHelper";
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const listen = async () => {
  try {
    await listenToEmployeeStream();
  } catch (error) {
    console.log(error);
  }
};
app.prepare().then(() => {
  listen();
});
