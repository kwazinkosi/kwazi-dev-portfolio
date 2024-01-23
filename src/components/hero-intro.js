// Desc: Hero intro component for the home page
import Point from "./point";
const IntroText = ({text, index}) => {
  return ( 
    <p className="text-xl text-left max-w-xl mb-4 sm:text-lg md:text-xl lg:text-2xl">
      {text}
    </p>
  );
}

const HeroIntro = ({heading, introTexts}) => {
  return ( 
    <div className="flex flex-col justify-center text-white sm:text-lg md:text-xl lg:text-2xl  mb-4 mr-auto ml-auto ">
      <div className="flex flex-row ">
        {/* Intro point */}
        <Point/> 
         {/*Heading  */}
        <h1 style={{fontFamily: "overpass"}} className="font-bold mb-6 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {heading}
        </h1>
      </div>
      
      {/* Intro paragraphs */}
      {
        introTexts.map((text, index) => (
          <IntroText key={index} text={text} />
        ))
      }

    </div>
  );
}

export default HeroIntro; 
