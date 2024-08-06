import { Routes, Route } from "react-router-dom";
import EditProfileDescription from "../../features/edit/EditProfileDescription";
import EditClientOffer from "../../features/edit/EditClientOffer";

export default function Edit() {
    return (
        <div className="bg-main-background-color flex justify-center items-center h-[auto] sm:h-auto sm:py-[5rem] py-[3rem]">
          <Routes>
            <Route path="profile/description" element={<EditProfileDescription />} />
            <Route path="client/offer/:id" element={<EditClientOffer />} />
            <Route path="freelancer/offer/:id" element={<EditClientOffer />} />
          </Routes>
        </div>
      );
}
