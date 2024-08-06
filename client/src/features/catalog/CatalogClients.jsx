import { useEffect } from "react";
import { useClientsInfoAll } from "../../hooks/useUsers";
import ClientCard from "./components/ClientCard";

export default function CatalogClients() {
    const { clients, loading, error } = useClientsInfoAll(null);
  
    return (
        <div className="grid grid-cols-3 gap-y-[1.5rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
            {Object.values(clients).map((data, index) => (
                <ClientCard clientInfo={data} key={index} />
            ))}
        </div>
    );
}
