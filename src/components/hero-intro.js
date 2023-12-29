export default function HeroIntro(socials) {
  return (
    <div className="flex flex-col items-center justify-center text-white sm:text-lg md:text-xl lg:text-2xl m-6 md:m-8 lg:m-12">
      <h1 className="text-5xl font-bold mb-6 text-left ">
        Hi, I'm Kwazi
      </h1>
      <p className="text-lg text-left max-w-xl mb-8 sm:text-lg md:text-xl lg:text-2xl">
       —A passionate fullstack web developer based in Johannesburg. I craft dynamic web solutions with creativity
        and precision. 
      </p>
      <p className="text-xl text-left max-w-xl mb-8 sm:text-lg md:text-xl lg:text-2xl">
        Let's embark on a digital adventure where innovation
        meets seamless functionality. 
      </p>
      <div className="flex flex-row justify-center items-center ">
         <socials.socials/>
      </div>
    </div>

  );
}
