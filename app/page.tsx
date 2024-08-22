import ExperienceCard from "@/components/ExperienceCard";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className=" container mx-auto" id="work">
        <SectionTitle title="Experience" />
        <div className="mt-12"></div>

        <div className="flex flex-col gap-0">
          <ExperienceCard
            company="Roraima Devs"
            position="Sr. Full Stack Developer"
            description=" Served as the main Front End Developer on a critical real estate
          auction application. Leveraged React.js, Next.js and Laravel to
          design, develop, and maintain the user interface, views, and
          components. Collaborated with the backend team to implement robust
          business logic, ensuring seamless user experiences and efficient
          auction processes. Successfully delivered and deployed to final users."
          />
          <ExperienceCard
            company="Freelance"
            position="Full Stack Developer"
            description="Worked as a Freelancer with client creating Chatbots and
              integrating them with Facebook Messenger APIs. Integrating IA B2B
              Services to process restaurant orders on chatbots."
          />
          <ExperienceCard
            company="Altimetrik"
            position="Frontend Semi Senior Developer"
            description=" Worked mainly as Frontend Semi senior developer building
              functional components based on Figma wireframes and mockups
              functionalities for top global company in the sector of financial
              investments."
          />
        </div>
      </section>

      <SkillsSection />
    </>
  );
}
