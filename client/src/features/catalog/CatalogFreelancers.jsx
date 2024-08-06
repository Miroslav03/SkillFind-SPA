import { useClientsInfoAll, useFreelancerInfoAll } from "../../hooks/useUsers";
import FreelancerCard from "./components/FreelancerCard";

export default function CatalogFreelancers() {
    const { freelancers, loading, error } = useFreelancerInfoAll(null);
    
    return (
        <div className="grid grid-cols-4 gap-y-[1.5rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
              {Object.values(freelancers).map((data, index) => (
                <FreelancerCard freelancerInfo={data} key={index} />
            ))}
        </div>
    );
}
