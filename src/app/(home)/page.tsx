import Banner from "@/components/banner";
import { LeadContact } from "@/components/lead-contact";
import { Portfolios } from "@/components/portfolios";
import { Summary } from "@/components/summary";

const HomePage = () => {
  return (
    <main className="pt-48">
      <Banner />
      <Summary />
      <Portfolios />
      <LeadContact />
    </main>
  );
};

export default HomePage;
