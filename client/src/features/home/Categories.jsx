import CategoryCard from "../../components/ui/CategoryCard";

export default function Categories() {
  return (
    <div className="h-full py-14 bg-main-background-color flex flex-col justify-start items-center gap-6">
      <h1 className="text-main-text-color text-center text-2xl font-bold">
        Browse by category
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-y-[1rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
