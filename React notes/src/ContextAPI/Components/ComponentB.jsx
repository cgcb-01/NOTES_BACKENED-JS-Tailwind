import ComponentC from "./ComponentC.jsx";
const ComponentB = ({ name }) => {
  return (
    <div>
      Sending To Component C
      <ComponentC name={name} />
    </div>
  );
};
export default ComponentB;
