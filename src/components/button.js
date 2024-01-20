
export default function Button({text}) {
  return (
    <div className="flex flex-row justify-center items-center">
      <button className="bg-gradient-to-b from-tertiary2 to-secondary/90 text-white font-semibold py-2 px-4 rounded-full font-overpass shadow-md shadow-primary sm:shadow-md hover:shadow-primary hover:font-bold hover:text-primary transition duration-500 ease-in-out sm:text-base md:text-lg lg:text-xl" style={{flexShrink: 0}}>
        {text}
      </button>
    </div>
  );
}
