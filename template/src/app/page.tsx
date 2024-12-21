import Link from "next/link";
import { CarouselDemo } from "@/components/Carousel";
import TramiteCard from "@/components/TramiteCard";
import InfoCard from "@/components/InfoCard";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <CarouselDemo />
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-16">
        <TramiteCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Home;