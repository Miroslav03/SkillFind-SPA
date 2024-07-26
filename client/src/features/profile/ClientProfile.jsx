import person1 from "../../assets/person-2.jpg";
import person2 from "../../assets/person-1.jpg";
import person3 from "../../assets/Client-1.jpg";
import JobCard from "../catalog/components/JobCard";
import OffertCard from "./components/OffertCard";
import Button from "../../components/ui/Button";

export default function ClientProfile() {
  return (
    <div className="h-auto w-[90%] flex flex-col sm:flex-col rounded-sm">
      <div className="flex flex-col items-center gap-[1rem] bg-main-background basis-[50%] justify-center shadow-xl pb-[4rem]">
        <div className="h-[100%] w-[100%]  bg-cover bg-center rounded-sm">
          <img
            src={person3}
            alt=""
            className="w-[100%] h-[100%] "
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold text-3xl text-main-text-color">Ultra Play</h1>
          <h2 className="font-semibold text-lg text-main-text-color text-center">
            Bulgaria
          </h2>
        </div>
        <div className="flex gap-[1rem]">
          <div className="flex flex-col items-center">
            <p className="text-bold text-main-yellow-color text-xl">100</p>
            <p className="font-semibold text-sm text-main-text-color text-center">
              Total Employyes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-bold text-main-yellow-color text-xl">3</p>
            <p className="font-semibold text-sm text-main-text-color text-center">
              Total Offers
            </p>
          </div>
        </div>
        <div>
          <p className="px-[15rem] sm:px-[1rem]">
            About the compnay: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur nam numquam veritatis tempore quae distinctio
            consequuntur quas ullam laudantium ratione ea rem, sapiente porro
            quis doloremque, necessitatibus unde labore. Quibusdam! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Porro, odit cupiditate!
            Minima velit unde officia nisi, perspiciatis suscipit. Aliquam
            expedita dignissimos, iste in porro vitae amet quia beatae adipisci
            reiciendis!
          </p>
        </div>
      </div>
      <div className="basis-[50%] bg-main-text-color shadow-xl">
        <h2 className="text-center py-[2rem] text-2xl text-main-yellow-color font-bold">
          Created Offers
        </h2>
        <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 pb-[2rem] sm:grid-cols-1">
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
        </div>
        </div>
      </div>
      
    </div>
  );
}
