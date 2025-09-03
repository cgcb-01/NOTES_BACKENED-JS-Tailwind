import ComponentC from "./ComponentC.jsx";
const ComponentB = () => {
  return (
    <div>
      Sending To Component C -- From B
      <ComponentC />
    </div>
  );
};
export default ComponentB;
