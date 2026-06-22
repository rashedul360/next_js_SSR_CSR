import ServerComponentTwo from "@/components/serverComponentTwo";
import fs from "fs";
const ServerComponentOne = async () => {
  const data = await fs.readFile("data.txt", "utf-8");
  return (
    <>
      <h1>Server component one</h1>
      <ServerComponentTwo />
    </>
  );
};

export default ServerComponentOne;
