import UserCard from "@/components/UserCard";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users = await res.json();
  return users;
};
const page = async () => {
  const users = await getUsers();
  return (
    <>
      <h1>users</h1>
      <UserCard users={users} />
    </>
  );
};

export default page;
