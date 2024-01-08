import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const navigate = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const chef = form.get("chef");
    const supplier = form.get("supplier");
    const taste = form.get("taste");
    const category = form.get("category");
    const details = form.get("details");
    const photo = form.get("photo");
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(
      `https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Coffee updated successfully.",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="max-w-[1320px] mx-auto">
      <Link className="flex items-center space-x-4 mt-12" to="/">
        <AiOutlineArrowLeft />
        <h1 className="font-Rancho text-3xl text-[#374151]"> Back to home </h1>
      </Link>
      <div className="bg-[#F4F3F0] rounded mt-32 mb-32 pb-16">
        <h1 className="font-Rancho text-6xl text-center">
          Update Existing Coffee Details
        </h1>
        <p className="font-Raleway mt-8 p-4 lg:px-48 mb-8 text-lg text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        {/* form */}
        <form onSubmit={handleUpdateCoffee}>
          <div className="flex flex-col items-center lg:items-stretch">
            <div className="flex flex-col lg:flex-row justify-between">
              {/* name */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="name"
                    type="text"
                    defaultValue={name}
                    placeholder="Enter Coffee name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              {/* Chef */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Chef
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="chef"
                    type="text"
                    defaultValue={chef}
                    placeholder="Enter Chef name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* supplier */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Supplier
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="supplier"
                    type="text"
                    defaultValue={supplier}
                    placeholder="Enter Supplier name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              {/* Taste */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Taste
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="taste"
                    type="text"
                    defaultValue={taste}
                    placeholder="Enter Coffee Taste"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* category */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Category
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="category"
                    type="text"
                    defaultValue={category}
                    placeholder="Enter coffee Category"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              {/* Details */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Details
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="details"
                    type="text"
                    defaultValue={details}
                    placeholder="Enter Coffee Details"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* photo */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Photo
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="photo"
                    type="text"
                    defaultValue={photo}
                    placeholder="Enter photo url"
                    className="md:w-[300px] lg:w-[740px] xl:w-[1000px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            {/* submit button */}

            <div className="flex justify-center">
              <input
                type="submit"
                value="Update Coffee Details"
                className="btn bg-[#D2B48C] font-Rancho text-2xl mt-6 md:w-[300px] lg:w-[740px] xl:w-[1000px] border-black"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
