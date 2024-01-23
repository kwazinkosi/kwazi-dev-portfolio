import '../styles/hexagon.css';

export default function Hexagon({photo, text}) {
  return (
    <div className="hexagon-container">
      <div className="hexagon position-relative">
        <svg  style={{visibility: "hidden", position: "absolute", width: "0", height: "0", xmlns: "http://www.w3.org/2000/svg"}}>
          
          <defs>
            <filter id="roundCorner" >
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="in" />
            </filter>
          </defs>
          
        </svg> 
        
        {photo && <img className="img" src={photo} alt="Kwazi" />} 
        {text && <div className="hexagon-text text-center text-white w-full h-full/2">
          <p className="text-xl text-left max-w-xl mb-2 px-4 sm:text-lg md:text-xl lg:text-2xl">
            {text}
          </p>
        </div>}
      </div>
    </div>
  );
}