import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { InputTypes } from "../../shared/types/input-types";

export default function Login() {
  return (
    <div className="bg-main-background-color flex justify-center items-center h-[50rem]">
      <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[25rem] shadow-xl rounded-sm">
        <h1 className="text-2xl font-bold text-center text-white">Log In</h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Your Email:
            </label>
            <Input type={InputTypes.Email} placeholder={"example@gmail.com"} />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Password:
            </label>
            <Input type={InputTypes.Password} placeholder={".........."} />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Confirm password:
            </label>
            <Input type={InputTypes.Password} placeholder={".........."} />
          </div>
          <div className="pt-[0.5rem] text-center">
            <Button
              label={"Log In"}
              px="px-6"
              py="py-2"
             
            />
          </div>
          <p className="text-base text-center text-white">
            Dont't have an account?{" "}
            <a
              href="#"
              className=" text-primary-600 hover:underline dark:text-primary-500 text-main-yellow-color font-semibold"
            >
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
