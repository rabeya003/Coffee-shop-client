import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Header from "./Header";
import Swal from "sweetalert2";
import { AiOutlineArrowLeft } from "react-icons/ai";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, email } = user;
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const updatedUser = { name, email };

    fetch(
      `https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/users/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "User updated successfully.",
          });
          navigate("/users");
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-200 pb-4 shadow-xl">
        <Header />
      </div>

      <Link className="flex items-center space-x-4 mt-12">
        <AiOutlineArrowLeft />
        <h1 className="font-Rancho text-3xl text-[#374151]"> Back </h1>
      </Link>
      <h1 className="font-Rancho text-6xl text-center">Update Existing User</h1>

      <form onSubmit={handleUpdate}>
        <div className="overflow-x-auto max-w-7xl mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>

                <td>
                  <input
                    placeholder="Enter Name"
                    type="name"
                    name="name"
                    className="text-black border p-4 w-full"
                    defaultValue={name}
                  />
                </td>

                <td>
                  <input
                    placeholder="Enter Email"
                    type="email"
                    name="email"
                    className="text-black border p-4 w-full"
                    defaultValue={email}
                  />
                </td>

                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Update User Details"
              className="btn bg-[#D2B48C] font-Rancho text-2xl mt-6 md:w-[300px] lg:w-[740px] xl:w-[1000px] border-black"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
