import ClientProfile from "../../features/profile/ClientProfile";
import FreelancerProfile from "../../features/profile/FreelancerProfile";

export default function Profile() {
  return (
    <div className="h-auto py-[5rem] bg-main-background-color flex items-center flex-col justify-center">
      {/* <FreelancerProfile/> */}
      <ClientProfile/>
    </div>
  )
}
