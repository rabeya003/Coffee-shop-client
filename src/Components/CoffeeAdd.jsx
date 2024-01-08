import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  // eslint-disable-next-line no-unused-vars
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure to delete this coffee?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remainingCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="card h-[200px] card-side bg-[#ECEAE3] shadow-xl">
        <figure className="m-4">
          <img src={photo} className="w-44 rounded-lg" alt="coffee" />
        </figure>
        <div className="flex justify-between items-center w-full pr-10">
          <div>
            <h2>
              <span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">
                Name:{" "}
              </span>
              <span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">
                {name}
              </span>
            </h2>
            <p>
              <span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">
                Chef:{" "}
              </span>
              <span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">
                {chef}
              </span>
            </p>
            <p>
              <span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">
                Category:{" "}
              </span>
              <span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">
                {category}
              </span>
            </p>
            <p>
              <span className="text-[#1B1A1A] text-xs lg:text-sm font-Raleway font-semibold">
                Taste:{" "}
              </span>
              <span className="text-[#5C5B5B] text-xs lg:text-sm font-Raleway">
                {taste}
              </span>
            </p>
          </div>
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn bg-[#D2B48C] text-white text-xl">
              <AiOutlineEye></AiOutlineEye>
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn bg-[#3C393B] text-white text-xl">
                <AiOutlineEdit></AiOutlineEdit>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-[#EA4744] text-white text-xl"
            >
              <AiOutlineDelete></AiOutlineDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired,
};
export default CoffeeCard;
