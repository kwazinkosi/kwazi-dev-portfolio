
export default function Button({text, onClick}) {
  return (
    <div className="flex flex-row justify-center items-center hover:scale-105 transition duration-300 ease-in-out">
      <button onClick={onClick}
        className="bg-gradient-to-b from-tertiary2 to-secondary/90 text-white font-semibold py-2 px-4 rounded-full font-overpass shadow-md shadow-primary sm:shadow-md hover:shadow-primary hover:font-bold hover:text-primary transition duration-250 ease-in-out sm:text-base md:text-lg lg:text-xl" style={{flexShrink: 0}}>
          {text}
      </button>
    </div>
  );
}
