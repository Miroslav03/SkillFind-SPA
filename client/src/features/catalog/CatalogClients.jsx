import ClientCard from "./components/ClientCard";

export default function CatalogClients() {
  return (
    <div className="grid grid-cols-3 gap-y-[1.5rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
      <ClientCard/>
      <ClientCard/>
      <ClientCard/>
      <ClientCard/>
      <ClientCard/>
      <ClientCard/>
      <ClientCard/>
    </div>
  );
}
