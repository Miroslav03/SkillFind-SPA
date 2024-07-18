import person1 from "../../../assets/person-1.jpg";

export default function TestemonialCard() {
  return (
    <div className="bg-main-text-color w-[20rem] h-[20rem] py-4 px-4 flex flex-col gap-3 shadow-lg">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-[6rem] h-[6rem]">
          <img src={person1} alt="person-img" className="h-full w-full rounded-[50%] border-4 border-main-yellow-color" />
        </div>
        <div className="text-center">
          <h3 className="text-white font-bold text-xl">Andreela Gilbert</h3>
          <h4 className="text-main-yellow-color font-bold">UX Designer</h4>
        </div>
      </div>
      <p className="text-center text-white font-medium">
        Really good design documentation and everything. I love the structure of
        the website and also I love the structure of the website
      </p>
    </div>
  );
}
