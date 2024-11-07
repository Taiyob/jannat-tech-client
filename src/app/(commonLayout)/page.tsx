import Banner from "@/components/Banner/Banner";
import Hired from "@/components/Hired/Hired";
import Pricing from "@/components/Pricing/Pricing";
import Service from "@/components/Service/Service";

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <Hired />
      <Pricing />
    </div>
  );
}
