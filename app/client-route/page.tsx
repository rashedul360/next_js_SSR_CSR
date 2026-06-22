"use client";
import { clientSideFunction } from "@/utils/client-utils";
const page = () => {
  const result = clientSideFunction();
  return <>{result}</>;
};
export default page;
