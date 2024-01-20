import photo from "../assets/images/kwazi.png";
import '../styles/hexagon.css';

export default function Hexagon() {
    return (
      <div className="hexagon-container sm:m-6 md:m-8 lg:m-12 lg:ml-12">
        <div className="hexagon" >
          <svg  style={{visibility: "hidden", position: "absolute", width: "0", height: "0", xmlns: "http://www.w3.org/2000/svg"}}>
            
            <defs>
              <filter id="roundCorner" >
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="in" />
              </filter>
            </defs>
            
          </svg> 
          <img className="img" src={photo} alt="Kwazi" /> 
        </div>
        
      </div>
    );
  }