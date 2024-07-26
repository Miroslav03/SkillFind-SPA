import Button from "../../../components/ui/Button";
import Card1 from "../../../assets/Client-1.jpg";
export default function OffertCard() {
  return (
    <div className="h-[10rem] w-[30rem] sm:w-[23rem] sm:h-[8rem] rounded-sm bg-main-text-color  flex flex-col gap-3 hover:scale-[1.02] transition duration-300 cursor-pointer shadow-xl hover:shadow-main-text-color">
      <div className="flex flex-col gap-4 justify-center">
        <div className="basis-[20%]">
          <img src={Card1} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="basis-[80%] flex gap-4 justify-center">
          <h1 className="text-start font-bold text-xl text-white">
            UltraPlay contacted you!
          </h1>
          <Button label={"More"} px="px-6" py="py-2" />
        </div>
        
      </div>
    </div>
  );
}
