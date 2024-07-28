import Client1 from "../../assets/Client-1.jpg";
import Button from "../../components/ui/Button";

export default function Offer() {
  return (
    <div className="h-auto pb-[5rem] pt-[3rem] bg-main-background-color flex items-center flex-col justify-center">
      <div className="h-auto w-[50%] flex flex-col sm:flex-col rounded-sm">
        <div className="flex flex-col items-center gap-[1rem] bg-main-background basis-[50%] justify-center shadow-xl pb-[4rem]">
          <div className="h-[100%] w-[100%]  bg-cover bg-center rounded-sm">
            <img src={Client1} alt="" className="w-[100%] h-[100%] " />
          </div>
          <div className="flex flex-col ">
            <h1 className="font-bold text-3xl text-main-text-color">
              Ultra Play
            </h1>
          </div>
          <div>
            <p className="px-[15rem] sm:px-[1rem]">
              About the compnay: Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Consectetur nam numquam veritatis tempore quae
              distinctio consequuntur quas ullam laudantium ratione ea rem,
              sapiente porro quis doloremque, necessitatibus unde labore.
              Quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro, odit cupiditate! Minima velit unde officia nisi,
              perspiciatis suscipit. Aliquam expedita dignissimos, iste in porro
              vitae amet quia beatae adipisci reiciendis!
            </p>
          </div>
          <div className="flex gap-6">
        <Button label={'Accept'} px="px-4" py="py-2"/>
        <Button label={'Decline'} px="px-4" py="py-2"/>
        </div>
        </div>
      </div>
    </div>
  );
}
