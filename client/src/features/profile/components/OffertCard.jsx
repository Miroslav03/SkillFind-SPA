import Button from "../../../components/ui/Button";

export default function OffertCard() {
  return (
    <div className="h-[12rem] w-[30rem] sm:w-[23rem] sm:h-[20rem] rounded-sm bg-main-yellow-color py-4 px-4 flex flex-col gap-3 hover:scale-[1.02] transition duration-300 cursor-pointer shadow-xl">
      <div className="flex gap-7 justify-center">
        <h1 className="text-start font-bold text-xl text-white">
          Looking for Front-End Developer
        </h1>
        <Button label={"More"} px="px-6" py="py-2" />
      </div>
      <p className="text-main-text-color">
        Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Distinctio labore recusandae delectus, ea assumenda pariatur
        perspiciatis nulla quis at mollitia, iure, libero aperiam voluptatibus
        obcaecati quae harum quaerat. Eaque, beatae.
      </p>
    </div>
  );
}
