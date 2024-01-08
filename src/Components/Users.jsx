import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";

const Users = () => {
  const userLoader = useLoaderData();

  const [user, setUser] = useState(userLoader); // eslint-disable-line no-unused-vars

  const handleDeleteTable = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/users/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remainingUser = user.filter((use) => use._id !== _id);
              setUser(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="bg-gray-200 pb-4 shadow-xl">
        <Header />
      </div>

      <h2 className="text-4xl text-center py-10 underline font-semibold font-Rancho">
        {" "}
        {user?.length > 1
          ? `Total Users: ${user.length}`
          : `Total User: ${user.length}`}{" "}
      </h2>

      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Id Created</th>
              <th>Last signed in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u) => (
              <tr key={u._id}>
                <td>
                  <img
                    src={u.photo}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.createdAt}</td>
                <td>{u.lastSignInTime}</td>
                <td>
                  {" "}
                  <Link to={`/updateUser/${u._id}`}>
                    <button className="btn bg-[#3C393B] text-white text-xl">
                      <AiOutlineEdit></AiOutlineEdit>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteTable(u._id)}
                    className="btn bg-[#EA4744] text-white text-xl"
                  >
                    <AiOutlineDelete></AiOutlineDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
