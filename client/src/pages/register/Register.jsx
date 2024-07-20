import RegisterClient from "../../features/register/RegisterClient";
import RegisterFreelancer from "../../features/register/RegisterFreelancer";

export default function Register() {
  return (
    <div className="bg-main-background-color flex justify-center items-center h-[50rem]">
        <RegisterClient/>
        {/* <RegisterFreelancer/> */}
    </div>
  );
}
