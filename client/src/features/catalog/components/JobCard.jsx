import Button from "../../../components/ui/Button";

export default function JobCard() {
  return (
    <div className="h-[15rem] w-[40rem] sm:w-[23rem] sm:h-[20rem] rounded-sm bg-main-text-color py-4 px-4 flex flex-col gap-3 hover:scale-[1.02] transition duration-300 cursor-pointer shadow-xl">
      <h1 className="text-start font-bold text-xl text-white">Looking for Front-End Developer</h1>
      <p className="font-semibold text-white">Budget: <span className="font-semibold text-main-yellow-color">30$/hr</span></p>
      <p>
        Description - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Distinctio labore recusandae delectus, ea assumenda pariatur
        perspiciatis nulla quis at mollitia, iure, libero aperiam voluptatibus
        obcaecati quae harum quaerat. Eaque, beatae.
      </p>
      <div className="justify-end flex mr-4 mt-2">
      <Button label={'More'} px="px-6" py="py-2"/>
      </div>
    </div>
  );
}
