
interface propsSlider {
  changeBackground?: () => void;
  videoPreview?: string;
};


const SliderItem = ({ changeBackground, videoPreview }: propsSlider) => {
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
      <img src={videoPreview} alt="" />
    </div>
  );
};

export default SliderItem;
