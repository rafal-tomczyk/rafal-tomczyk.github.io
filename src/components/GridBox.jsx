const GridBox = ({ title, content }) => {
  const renderContent = () => {
    if (typeof content === "string") {
      return <p>{content}</p>;
    } else if (content.type === "images") {
      return (
      <div className="images">
        {content.images.map((image, index) =>(
            <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>);
    } 
    return null;
  };

  return (
    <div className="grid-box">
      <h3>{title}</h3>
      {renderContent()}
    </div>
  );
};

export default GridBox;
