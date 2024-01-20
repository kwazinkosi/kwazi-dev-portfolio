import Socials from "./socials";
import Button from "./button";

const IntroText = ({text}) => {
  return ( 
    <p className="text-xl text-left max-w-xl mb-4 sm:text-lg md:text-xl lg:text-2xl">
      {text}
    </p>
  );
}

const HeroIntro = ({heading, introTexts}) => {
  return ( 
    <div className="flex flex-col justify-center text-white sm:text-lg md:text-xl lg:text-2xl m-6 md:m-8 lg:m-12">
      <div className="flex flex-row ">
        {/* Intro point */}
        <div className="flex flex-row  w-8 h-14 rounded-full border-2 border-primary mr-8  bg-secondary/10 justify-left  text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
        </div> 
         {/*Heading  */}
        <h1 style={{fontFamily: "overpass"}} className="font-bold mb-6 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {heading}
        </h1>
      </div>
      
      {/* Intro paragraphs */}
      {
        introTexts.map(text =>  (
          <IntroText text={text} />
        ))
      }

    </div>
  );
}

export default HeroIntro; 