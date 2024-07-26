import React from "react";
import Button from "../../../components/ui/Button";
import client1 from "../../../assets/Client-1.jpg";

export default function ClientCard() {
  return (
    <div className="h-[18rem] w-[30rem] sm:w-[24rem] bg-main-text-color flex flex-col gap-3 shadow-xl justify-center items-center hover:scale-[1.02] transition duration-300 cursor-pointer background-cover rounded-sm">
      <div className="basis-[50%] bg-red-400 w-[100%] h-[100%] bg-cover bg-center">
        <img src={client1} alt="person-img" className="h-[100%] w-[100%] " />
      </div>
      <div className="basis-[50%] flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl text-white">UltraPlay</h1>
        <p className="font-semibold text-main-yellow-color text-lg">
          20 Jobs
        </p>
        </div>
        <div className="flex gap-5 items-center">
        <Button label={"See more"} px="px-6" py="py-2" />
        <p className="text-white font-bold">100 Employyes</p>
        </div>
      </div>
    </div>
  );
}
