import { AddUserModal } from "@/modules/users/AddtoUserModal";
import UserCard from "@/modules/users/userCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function Users() {
  const users = useAppSelector(selectUser);
  return (
    <div className="mx-auto max-w-7xl  px-5 mt-56">
      <div className="flex justify-end items-center -mt-48 gap-5">
        <h2 className="mr-auto">Users</h2>
        <AddUserModal />
      </div>
      <div className="space-y-5 mt-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
