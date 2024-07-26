import { InputTypes } from "../../shared/types/input-types";
import person1 from "../../assets/person-1.jpg";
import detailsImg from "../../assets/Details-test.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import ApplicantCard from "./components/ApplicantCard";

export default function ClientOfferDetails() {
  return (
    <div className="flex flex-col gap-[3rem] sm:flex-col sm:items-center px-[25%] sm:px-[5%]">
      <div className="flex flex-col   sm:justify-center sm:items-center">
        <div className="flex items-center gap-4 justify-center bg-gradient-to-r from-main-yellow-color to-main-background-color p-4 rounded-sm shadow-md">
          <h1 className="text-3xl text-main-text-color font-bold sm:text-center sm:text-2xl sm:px-4">
            Web Application Maintenance + Development - AI wrapper
          </h1>
          <Button label={"Apply"} px="px-6" py="py-2" />
        </div>
        <div className="flex sm:flex-col items-center gap-5 justify-between  py-[2rem] px-[1rem]">
          <div className="flex flex-col">
            <h2 className="text-main-text-color text-2xl font-semibold">
              UltraPlay
            </h2>
            <p className="text-main-yellow-color font-semibold"><span className="text-main-text-color">Salary:</span> $60.22/hr</p>
          </div>
          <div className="flex gap-2 sm:flex-col text-center">
            <Button label={"Edit"} px="px-6" py="py-2" />
            <Button label={"Delete"} px="px-6" py="py-2" />
            <Button label={"More about the company"} px="px-6" py="py-2" />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-center shadow-sm py-[2rem] px-[1rem]">
          <h2 className="font-bold text-main-text-color sm:text-center">
            About
          </h2>
          <p className="text-main-text-color  font-medium sm:px-4">
            I have a web application that is leveraging the API at
            https://homedesigns.ai/api to repurpose their offering toward my
            niche real estate market. The application has already been
            developed, but is in need of some updates, as well as standard
            ongoing maintenance. Here is the current app landing page, and we
            are redoing the rest of the website as well separately:
            https://app.scop3d.com/ We are hosing our project on Amazon EC2
            virtual machine. The main technologies are: 1. Linux Ubuntu server -
            main server OS. 2. PostgreSQL - our database system. 3. NGINX - web
            server. 4. Python - main programming language. 5. Django - web
            Python framework. 6. Celery - running background tasks. 7. Js &
            React, Vue - front-end frameworks. In addition to standard ongoing
            maintenance, I would like to add the functionality for images
            generated to be stored in the client's account in their dashboard.
            This functionality exists with the API, but is not integrated into
            my app. In addition, I welcome any additional feedback on ways to
            improve this application, overall user experience and other relevant
            APIs that I can implement. Please provide a quote for my request
            above, as well as any relevant work. Thank you.
          </p>
        </div>
      </div>
      <div>
      <h2 className="text-center text-main-text-color font-bold text-3xl pb-[2rem]">Total applicants</h2>
      <div className="grid grid-cols-3 gap-x-6 sm:grid-cols-1 sm:gap-y-6">
        <ApplicantCard/>
        <ApplicantCard/>
        <ApplicantCard/>
      </div>
      </div>
    </div>
  );
}
