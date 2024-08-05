import CreateClientJob from "../../features/create/CreateClientJob";
import CreateFreelancerOffer from "../../features/create/CreateFreelancerOffer";
import { Routes, Route } from "react-router-dom";
import CreateProfileDescription from "../../features/create/CreateProfileDescription";

export default function Create() {
    return (
        <div className="bg-main-background-color flex justify-center items-center h-[auto] sm:h-auto sm:py-[5rem] py-[3rem]">
          <Routes>
            <Route path="offer/client" element={<CreateClientJob />} />
            <Route path="offer/freelancer" element={<CreateFreelancerOffer />} />
            <Route path="profile/description" element={<CreateProfileDescription />} />
          </Routes>
        </div>
      );
}
