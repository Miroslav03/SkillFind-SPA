import React from "react";
import Button from "../../../components/ui/Button";
import person1 from "../../../assets/person-1.jpg"

export default function FreelancerCard() {
  return (
    <div className="h-[20rem] w-[20rem] bg-main-text-color py-4 px-4 flex flex-col gap-3 shadow-xl justify-center items-center hover:scale-105 transition duration-300 cursor-pointer">
      <img
        src={person1}
        alt="person-img"
        className="h-[7rem] w-[7rem] rounded-[50%] border-4 border-main-yellow-color"
      />
      <h1 className="font-bold text-xl text-white">Name</h1>
      <p className="font-semibold text-main-yellow-color text-lg">Web Developer</p>
      <p className="text-white font-semibold">$20/hr</p>
      <Button label={"See more"} px="px-6" py="py-2" />
    </div>
  );
}
