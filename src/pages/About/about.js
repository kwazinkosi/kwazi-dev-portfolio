import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Socials from "../../components/socials"; 
import AboutCard from "../../components/about-card";
// import Point from "../../components/point";

const aboutTexts = [
  "—Hey, I'm Kwazi—your friendly neighborhood web developer! Currently navigating the wild world of Electrical Engineering studies at Wits University, I've got a knack for turning coding challenges into triumphs.",
  "My experience ranges from crafting engaging C++ games to developing innovative IoT projects in both assembly and C++. And with a solid foundation in both back-end and front-end technologies, I bring a versatile skill set to the table.",
  "When I'm not immersed in textbooks or writing lines of code, you'll find me exploring the latest web trends, diving into the tech community, and occasionally wrestling with the ever-elusive bug or just playing my guitar. ",
  "My journey isn't just about the syntax—I'm on a mission to inject creativity into every project. From designing sleek interfaces to engineering robust back-end solutions, I deliver end-to-end solutions tailored to your business needs.",
  "For me, it's not just about what I've learned; it's about what I'm hungry to discover next. I thrive on the thrill of constant exploration and innovation in the vast landscape of web development. Always ready to learn and grow.", 
  "With hands-on experience in JavaScript, React, Node.js, PHP, SQL, HTML, CSS, Tailwind, Boostrap, Material UI, Python, Django, C++ and avr assembly , I've honed my skills across a diverse tech stack.",
];

const aboutHeadings =[
  "Behind the Code",
  "Crafting Digital Magic",
  "Beyond the Books",
  "Code, Creativity, and Coffee",
  "Learning as a Lifestyle",
  "Tech Stack and Beyond",
];

export default function about() {
  return (
    <div  className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2 flex-grow w-full">
      <Navbar/>
      <div className="flex flex-col items-center justify-center flex-1 mx-4 sm:mx-12 md:mx-16 lg:mx-24 text-center my-20 md:my-36 lg:my-40 ">
        {/* <div className="flex flex-row  justify-center">
          <Point/> */}
          <h1 className="about text-5xl font-bold text-white">About</h1>
        {/* </div> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-4 lg:gap-4 mt-4">
          {
            aboutTexts.map((text, index) => (
              <AboutCard aboutHeading={aboutHeadings[index]} aboutText={text} />
            ))
          }
        </div>
      </div>
      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  );
}
