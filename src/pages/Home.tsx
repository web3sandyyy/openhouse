import React from "react";
import walletx from "../assets/walletx.png";
import pfp from "../assets/pfp.jpeg";
import gasless from "../assets/illustrationsEmpty/gassless.png";
import IconsBg from "../components/IconsBg";

const UserProfile = ({ img, name }) => {
  return (
    <div className="w-fit p-4 bg-emerald-400 rounded-md">
      <img src={img} alt="pfp" className="h-32 w-32 rounded-full" />
      <p className="text-lg text-center font-semibold mt-2">{name}</p>
    </div>
  );
};

const data = [
  {
    img: pfp,
    name: "Cryptorohit",
  },
  {
    img: pfp,
    name: "Cryptorohit",
  },
  {
    img: pfp,
    name: "cryptorohit",
  },
  {
    img: pfp,
    name: "CR",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-themeGreen">
      <IconsBg />
      <div className="flex-grow flex flex-col relative z-10">
        <div className=" mt-4 md:mt-6">
          <img src={walletx} alt="walletx" className="h-10 w-fit mx-auto" />
        </div>

        <p className="text-5xl font-semibold mx-6 md:mx-12 mt-4 md:mt-6 p-6 bg-themeYellow rounded-xl playful">
          Welcome to Openhouse!
        </p>

        <div className="flex-grow bg-themeYellow  mx-6 md:mx-12 my-4 md:my-6 p-6 rounded-xl flex justify-center items-center">
          <p className="font-semibold text-center text-2xl">
            No Quizzes found yet
          </p>
        </div>
      </div>

      {/* <div className="flex-grow flex items-center justify-center w-full">
        <div>

          <p className="font-semibold">Click to vote</p>

          <div className="mt-4 flex flex-wrap gap-4 justify-center items-center w-fit mx-auto">
            {data.map((item, index) => (
              <UserProfile key={index} img={item.img} name={item.name} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
