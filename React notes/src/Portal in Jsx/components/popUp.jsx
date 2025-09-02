const PopupContent = ({ copied }) => {
  return (
    <div>
      {copied && (
        <h3
          style={{
            position: "absolute",
            bottom: "0.3rem",
            padding: "5px",
          }}
        >
          Copied to Clipboard
        </h3>
      )}
    </div>
  );
};
export default PopupContent;
