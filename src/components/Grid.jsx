import "./Grid.css";
import data from "../data";
import GridBox from "./GridBox";

const Grid = () => {
  return (
    <section className="grid">
      <div className="left">
        {data.leftGrid.map((item) => (
          <GridBox key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
      <div className="right">
        {data.rightGrid.map((item) => (
          <GridBox key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
};
export default Grid;
