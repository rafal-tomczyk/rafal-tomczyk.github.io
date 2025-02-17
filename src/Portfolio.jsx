import PortfolioPart from "./components/PortfolioPart";
import data from "./data";

const Portfolio = () => {
  return (
    <section className="prt">
      {data.portfolio.map((project) => (
        <PortfolioPart
          key={project.id}
          title={project.title}
          overview={project.overview}
          link={project.link}
          image={project.image}
        />
      ))}
    </section>
  );
};
export default Portfolio;
