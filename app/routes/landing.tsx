import AboutSection from "~/components/AboutSection";
import ValuesSection from "~/components/ValuesSection";
import SubscribeSection from "~/components/SubscribeSection";
import FirstSection from "~/components/FirstSection";
import HeaderPage from "~/components/HeaderPage";

const Landing = () => {
  return (
    <main id="content">
      <div className="bg-gray-100">
        <HeaderPage />
        <FirstSection />
        <AboutSection
          title="Mision"
          description="To offer a wide range of innovative software products by
                implementing AI. To enable businesses to streamline their processes
                by providing them with AI-based tools."
          img_1_url="https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg"
          img_2_url="https://www.becas-santander.com/content/dam/becasmicrosites/blog/innovacion-tecnologica.jpg"
        />
        <AboutSection
          title="Vision"
          description="To be a leading company in the market of intelligent and customized
              web solutions. To use cutting-edge tools that allow us to bring
              artificial intelligence technologies to the market."
          img_1_url="https://img.freepik.com/vector-premium/concepto-tecnologia-comunicacion-mundo-digital_46706-848.jpg"
          img_2_url="https://media.istockphoto.com/id/1164467533/photo/china-ningbo-cityscape.jpg?b=1&s=170667a&w=0&k=20&c=dVxzybt7A2_kQzWPDdqygSm0cOG8jh1cJVFl-rRkETg="
        />
        <ValuesSection />
        <SubscribeSection />
      </div>
    </main>
  );
};
export default Landing;
