type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const getAuthor = async (userId: Number): Promise<User> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch author");
  }

  return res.json();
};

const Author = async ({ userId }: { userId: Number }) => {
  const user = await getAuthor(userId);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border">
      <h2 className="text-lg font-semibold">Author Info</h2>

      <p className="text-gray-700 mt-2">👤 {user.name}</p>

      <p className="text-sm text-gray-500">📧 {user.email}</p>
      <p className="text-sm text-gray-500">📞 {user.phone}</p>
    </div>
  );
};

export default Author;
