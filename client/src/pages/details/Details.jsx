import ClientOfferDetails from "../../features/details/ClientOfferDetails";
import FreelancerOfferDetails from "../../features/details/FreelancerOfferDetails";

export default function Details() {
  return (
    <div className="h-auto pb-[5rem] pt-[3rem] bg-main-background-color flex flex-col justify-center items-center gap-10  sm:px-0">
      <FreelancerOfferDetails/>
     {/*  <ClientOfferDetails/> */}
    </div>
  )
}
