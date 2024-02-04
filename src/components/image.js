import Hexagon from "./hexagon";
import photo from "../assets/images/kwazi05.png";

export default function image() {
  return (
    <>
      <div className="image mt-10">
        <Hexagon photo={photo} />
      </div>
    </>
  );
}
