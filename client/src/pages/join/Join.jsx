export default function Join() {
  return (
    <div className="h-[40rem] bg-main-background-color flex justify-center items-center gap-5 flex-col sm:h-[45rem]">
      <h1 className="font-bold text-main-text-color text-3xl pb-4 sm:text-center">
        Register as a Client or Freelancer
      </h1>
      <div className="flex gap-8 sm:flex-col">
        <div className="bg-main-yellow-color w-[22rem] h-[23rem] sm:w-[18rem] sm:h-[8rem] flex flex-col justify-center items-center cursor-pointer hover:bg-main-text-color group hover:scale-105 transition duration-300 ease-in-out shadow-xl">
          <span className="material-symbols-outlined text-main-text-color text-4xl group-hover:text-white">
            work
          </span>
          <h2 className="font-bold text-3xl sm:text-2xl text-white group-hover:text-main-yellow-color">
            I'm a Client
          </h2>
        </div>
        <div className="bg-main-yellow-color w-[22rem] h-[23rem] sm:w-[18rem] sm:h-[8rem] flex flex-col justify-center items-center cursor-pointer hover:bg-main-text-color group hover:scale-105 transition duration-300 ease-in-out shadow-xl">
          <span className="material-symbols-outlined text-main-text-color text-4xl group-hover:text-white">laptop_mac</span>
          <h2 className="font-bold text-3xl sm:text-2xl text-white group-hover:text-main-yellow-color">
            I'm a Freelancer
          </h2>
        </div>
      </div>
    </div>
  );
}
