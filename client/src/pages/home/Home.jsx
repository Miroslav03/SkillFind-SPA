import Button from "../../components/ui/Button";
import Categories from "../../features/home/Categories";

export default function Home() {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen bg-main-background-color bg-main-background bg-center bg-cover">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-[#19232a]">
            Unlock Your Business Potential
          </h1>
          <p className="py-6 text-[#19232a]">
            Empower your enterprise by partnering with the perfect specialist.
          </p>
          <Button label={'Get Started'}/>
        </div>
      </div>
    </div>
    <Categories/>
    </>
  );
}
