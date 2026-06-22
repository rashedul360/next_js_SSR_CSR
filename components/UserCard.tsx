"use client";
import { User } from "@/app/users/page";
const UserCard = ({ users }: { users: User[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {users?.map((user) => (
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
  );
};
export default UserCard;
