type propsSlider = {
  changeBackground: () => void;
};

const SliderItem = ({ changeBackground }: propsSlider) => {
  return (
    <div
      className="slider-item"
      style={{
        width: "300px",
        height: "25vh",
        border: "1px solid black",
        borderRadius: "10px",
        background: "white",
        margin: '0 auto'
      }}
      onClick={changeBackground}
    >
      <h1 style={{ color: "purple", fontSize: "32px" }}>video</h1>
    </div>
  );
};

export default SliderItem;
