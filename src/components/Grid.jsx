import "./Grid.css";
import data from "../data";
import GridBox from "./GridBox";
import HelloWorld from "./HelloWorld";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowDown,
  ArrowDown01,
  ChevronDown,
  MoveDown,
} from "lucide-react";

const Grid = () => {
  return (
    <section className="grid">
      <div className="left">
        <div className="hello-world">
          <HelloWorld />
        </div>
        {data.leftGrid.map((item) => (
          <GridBox key={`left-${item.id}`} title={item.title} content={item.content} />
        ))}
        <div className="arrows">
          <h1>Portfolio </h1>
          <h1>
            <MoveDown />
            <MoveDown />
            <MoveDown />
          </h1>
        </div>
      </div>
      <div className="right">
        {data.rightGrid.map((item) => (
          <GridBox key={`right-${item.id}`} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
};
export default Grid;
