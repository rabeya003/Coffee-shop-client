import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineCoffee } from "react-icons/ai";

import { useState } from "react";
import Header from "./Components/Header";
import CoffeeCard from "./Components/CoffeeAdd";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className="relative text-center">
        <img
          src="https://i.ibb.co/VwjMpDD/Rectangle-1.png"
          alt=""
          className="w-full"
        />
        <Link to="/">
          <div className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white md:text-2xl lg:text-6xl font-Rancho">
            <img
              src="https://i.ibb.co/8ccYMxt/logo1-1.png"
              alt=""
              className="w-6 md:w-12 lg:w-20 h-10 md:h-12 lg:h-20 mr-2 inline-block"
            />
            Espresso Emporium
          </div>
        </Link>
        <div className="absolute -top-[40%] md:top-0 xl:top-[25%] left-1/2 md:left-[70%] transform -translate-x-1/3 lg:-translate-x-1/2 -translate-y-1/2 z-10 text-base md:text-2xl lg:text-4xl font-Rancho drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <Header />
        </div>
      </div>

      <div className="relative">
        <img
          src="https://i.ibb.co/DgHht8b/Rectangle-2.png"
          alt=""
          className="h-[300px] md:h-auto w-full object-cover"
        />
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="font-Rancho text-base md:text-3xl xl:text-5xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="font-Raleway text-[10px] text-xs md:text-base xl:text-xl">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-lg mt-2 md:text-2xl font-Rancho text-black bg-[#E3B577] px-3 py-0 md:px-7 md:py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#ECEAE3]">
        <div className="max-w-[1620px] mx-auto p-10">
          <div className="flex flex-col md:flex-row justify-around gap-10">
            <div className="grid grid-cols-1 place-items-center md:place-items-start">
              <img src="https://i.ibb.co/6t06vJb/1.png" alt="" />
              <h1 className="text-[#331A15] font-Rancho text-3xl pt-2">
                {" "}
                Awesome Aroma{" "}
              </h1>
              <p className="text-[#1B1A1A] font-Raleway pt-2 text-center md:text-start">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-center md:place-items-start">
              <img src="https://i.ibb.co/QmvFZNp/2.png" alt="" />
              <h1 className="text-[#331A15] font-Rancho text-3xl pt-2">
                {" "}
                High Quality{" "}
              </h1>
              <p className="text-[#1B1A1A] font-Raleway pt-2 text-center md:text-start">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-center md:place-items-start">
              <img src="https://i.ibb.co/x5PrzTb/3.png" alt="" />
              <h1 className="text-[#331A15] font-Rancho text-3xl pt-2">
                {" "}
                Pure Grades{" "}
              </h1>
              <p className="text-[#1B1A1A] font-Raleway pt-2 text-center md:text-start">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-center md:place-items-start">
              <img src="https://i.ibb.co/FgN2hbX/4.png" alt="" />
              <h1 className="text-[#331A15] font-Rancho text-3xl pt-2">
                {" "}
                Proper Roasting{" "}
              </h1>
              <p className="text-[#1B1A1A] font-Raleway pt-2 text-center md:text-start">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-20">
        <h1 className="font-Raleway text-xl">---Slip & Savor---</h1>
        <h1 className="font-Rancho mt-3 text-[#331A15] text-4xl md:text-5xl">
          Our Popular Products
        </h1>
        <Link to="/addcoffee">
          <button className="text-lg mt-4 md:text-2xl font-Rancho text-white bg-[#E3B577] px-3 py-0 md:px-7 md:py-2 rounded-lg">
            <span className="flex items-center gap-2">
              Add Coffee{" "}
              <AiOutlineCoffee className="text-black"></AiOutlineCoffee>
            </span>
          </button>
        </Link>
      </div>

      <div className="my-12 max-w-[1620px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
