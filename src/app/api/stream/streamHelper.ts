import Redis from "ioredis";
export const listenToEmployeeStream = async (lastId = "$") => {
  try {
    const redis = new Redis({
      host: "127.0.0.1",
      port: 6379,
    });
    const data = await redis.xread(
      "BLOCK",
      0,
      "STREAMS",
      "SEND_TO_NODE",
      lastId
    );
    console.log(data);
    if (data) {
      const [key, messages] = data[0];
      const id = messages[0][1][1];
      await redis.xack(key, "GROUP", id);
      console.log(id);
      await redis.xadd("SEND_TO_RUST", "*", id, "send");
      await listenToEmployeeStream(messages[messages?.length - 1][0]);
    }
  } catch (error) {
    console.log(error);
  }
};
