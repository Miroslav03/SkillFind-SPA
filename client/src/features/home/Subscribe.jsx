import React from "react";
import Button from "../../components/ui/Button";

export default function Subscribe() {
  return (
    <div className="h-full bg-main-background-color py-16 px-[25rem] flex items-center justify-center gap-[6rem] sm:flex-col sm:px-4 sm:gap-[2rem]">
      <h1 className="text-5xl text-main-text-color font-bold sm:text-4xl sm:text-center">Subscribe to recive more specific jobs.</h1>
      <div>
        <form className="flex gap-2">
          <input type="text" name="" id="" className="bg-main-text-color w-[20rem] px-4 font-semibold" placeholder="Enter your email"/>
          <Button label={'Subscribe'}/>
        </form>
        <p className="font-normal text-main-text-color">We care about your data!</p>
      </div>
    </div>
  );
}
