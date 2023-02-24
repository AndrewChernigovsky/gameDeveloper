interface propsSlider {
  text: string;
  changeBackground: () => void;
};

const SliderItem = ({ text, changeBackground}: propsSlider) => {
  return (
    <div
      className="slider-item"
      style={{
        width: "300px",
        height: "150px",
        border: "1px solid black",
        borderRadius: "10px",
        background: "white",
      }}
      onClick={changeBackground}
    >
      <h1 style={{ color: "blue", fontSize: "32px" }}>{text}</h1>
    </div>
  );
};

export default SliderItem;
