import Separator from "./Separator";
import "./PortfolioPart.css"

const PortfolioPart = ({title, overview, link, image}) => {
  return (
    <div className="project">
      <Separator />
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>
        <a href={link}>{link}</a>
      </p>
      <img src={image} alt={title} />
    </div>
  );
}
export default PortfolioPart