import { InputTypes } from "../../shared/types/input-types";
import person1 from "../../assets/person-1.jpg";
import detailsImg from "../../assets/Details-test.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function FreelancerOfferDetails() {
  return (
    <div className="flex gap-[3rem] sm:flex-col sm:items-center px-[30%] sm:px-[5%]">
      <div className="flex flex-col gap-6 basis-8/12 sm:justify-center sm:items-center">
        <div className="flex ">
          <h1 className="text-3xl text-main-text-color font-bold sm:text-center sm:text-2xl sm:px-4">
            I will create a fully functional website from scratch
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={person1}
            alt="person-img"
            className="h-[5rem] w-[5rem] rounded-[50%] border-4 border-main-yellow-color"
          />
          <div className="flex flex-col">
          <h2 className="text-main-text-color text-xl font-semibold">
            Miroslav
          </h2>
          <p className="text-main-yellow-color font-semibold">
            $60.22/hr
          </p>
          </div>
          <div className="flex gap-2">
            <Button label={"Edit"} px="px-6" py="py-2" />
            <Button label={"Delete"} px="px-6" py="py-2" />
          </div>
        </div>
        <div className="h-[25rem] w-[90%] bg-main-text-color bg-center bg-cover border-main-text-color sm:h-[15rem]">
          <img src={detailsImg} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-2 sm:items-center">
          <h2 className="font-bold text-main-text-color sm:text-center">About</h2>
          <p className="text-main-text-color  font-medium sm:px-4">
            desc- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            necessitatibus aspernatur dolorum corrupti officia labore provident
            quae odio voluptates, minus similique recusandae neque quia? Debitis
            harum beatae veritatis? Adipisci, quas. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat velit eligendi necessitatibus
            corporis inventore dignissimos, debitis pariatur rem. Tenetur,
            reprehenderit saepe excepturi numquam ex assumenda dolorum nam
            laudantium ipsam soluta?
          </p>
        </div>
      </div>
      <div className="h-[18rem] w-[50rem] basis-4/12 bg-main-text-color p-[1rem] flex flex-col rounded-sm shadow-xl sm:w-4/5 ">
        <h2 className="text-center font-bold text-white text-xl mb-1 mt-2">
          Contact me
        </h2>
        <form className="flex flex-col items-center gap-4">
          <Input
            type={InputTypes.Text}
            placeholder={"Write me"}
            pb={"pb-[7rem]"}
          />
          <Button label={"Send"} px="px-6" py="py-2" />
        </form>
      </div>
    </div>
  );
}
