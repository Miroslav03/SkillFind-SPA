import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { InputTypes } from "../../shared/types/input-types";

export default function RegisterFreelancer() {
  return (
    <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
      <h1 className="text-2xl font-bold text-center text-white">
        Register as a Freelancer
      </h1>
      <form className="space-y-4 md:space-y-6" action="#">
        <div className="grid grid-cols-2 sm:grid-cols-1 grid-rows-3 gap-6 gap-y-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Name
            </label>
            <Input type={InputTypes.Text} placeholder={'Devin Perez'} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Professional Title
            </label>
            <Input type={InputTypes.Text} placeholder={'Web Developer'} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Skills
            </label>
            <Input type={InputTypes.Text} placeholder={'Write them by space'} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Hourly Rate
            </label>
            <Input type={InputTypes.Number} placeholder={'Must be a number'} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Email
            </label>
            <Input type={InputTypes.Text} placeholder={'email@adress.com'} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              ImageUrl
            </label>
            <Input type={InputTypes.Text} placeholder={'Must start with https://'} />
          </div>

          
        </div>
        <div>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Password:
            </label>
            <Input
              type={InputTypes.Password}
              placeholder={"Password (6 or more characters)"}
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-base font-semibold text-main-yellow-color"
            >
              Confirm password:
            </label>
            <Input
              type={InputTypes.Password}
              placeholder={"Password (6 or more characters)"}
            />
          </div>

        <div className="pt-[0.5rem] text-center">
          <Button label={"Log In"} px="px-6" py="py-2" />
        </div>
        <p className="text-base text-center text-white">
          Already have an account?{" "}
          <a
            href="#"
            className=" text-primary-600 hover:underline dark:text-primary-500 text-main-yellow-color font-semibold"
          >
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}
