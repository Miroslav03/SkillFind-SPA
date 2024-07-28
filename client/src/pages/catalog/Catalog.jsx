import { Routes, Route, Navigate } from "react-router-dom";
import CatalogAll from "../../features/catalog/CatalogAll";
import CatalogClients from "../../features/catalog/CatalogClients";
import CatalogFreelancers from "../../features/catalog/CatalogFreelancers";

export default function Catalog() {
  return (
    <div className="h-auto pb-[2rem] bg-main-background-color flex flex-col justify-start items-center gap-10">
      <h1 className="text-center pt-14 text-3xl text-main-text-color font-bold ">
        Freelancers
      </h1>
      <Routes>
        <Route path="/" element={<Navigate to="all" />} />
        <Route path="all" element={<CatalogAll />} />
        <Route path="clients" element={<CatalogClients />} />
        <Route path="freelancers" element={<CatalogFreelancers />} />
      </Routes>
    </div>
  );
}
