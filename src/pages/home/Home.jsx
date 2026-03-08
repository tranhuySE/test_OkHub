import ScrollToTopButton from "../../components/ui/ScrollToTopButton";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Section1 from "./Section-khoi-nguon/Section1";
import Section3 from "./Section-su-menh/Section3";
import Section2 from "./Setion-tam-nhin/Section2";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
