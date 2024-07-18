import TestemonialCard from "./components/TestemonialCard";

export default function Testimonials() {
  return (
    <div className="h-full bg-main-background-color py-16 flex flex-col gap-8 items-center">
      <h1 className="text-main-text-color text-center text-2xl font-bold">Testimonials</h1>
      <div className="grid grid-rows-1 grid-cols-3 gap-x-6 sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%] sm:gap-y-6">
        <TestemonialCard />
        <TestemonialCard />
        <TestemonialCard />
      </div>
    </div>
  );
}
