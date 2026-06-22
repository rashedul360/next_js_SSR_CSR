type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

const page = async () => {
  const users = await getUsers();
  if (users?.length == 0) return <h1>No User found</h1>;

  return (
    <>
      <h1>users</h1>

      <div className="flex flex-wrap gap-4">
        {users?.map((user: User) => (
          <div
            key={user.id}
            className="w-72 rounded-2xl shadow-lg p-4 bg-white flex items-center gap-4"
          >
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-xs text-gray-400">{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
