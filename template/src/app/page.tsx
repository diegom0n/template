import { CarouselDemo } from "@/components/Carousel";
import TramiteCard from "@/components/TramiteCard";
import InfoCard from "@/components/InfoCard";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center mt-4 gap-16">
        <CarouselDemo />
        <InfoCard />
      </div>
      <div className="flex flex-wrap justify-center mt-10 mb-10 gap-16">
        <TramiteCard />
      </div>
    </div>
  );
};

export default Home;