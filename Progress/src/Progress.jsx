const ProgressBar = ({ progress, color }) => {
  const styleObject = {
    width: `${progress}%`,
    backgroundColor: color || "blue",
    height: 30,
    // borderRadius: 20,
  };
  return (
    <div className="container">
      <div className="progress-bar">
        <div style={styleObject} className="value">{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
