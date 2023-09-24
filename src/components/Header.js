import Button from "./Button";

const Header = ({ title, onAdd }) => {
  const addd = () => {
    console.log("hi");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      {/* <Button color={"green"} text={"Add"} /> */}
      <button
        onClick={onAdd}
        style={{ backgroundColor: "green" }}
        className="btn"
      >
        Add
      </button>
    </div>
  );
};

export default Header;
