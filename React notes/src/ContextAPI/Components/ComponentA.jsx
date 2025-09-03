import ComponentB from "./ComponentB.jsx";
const ComponentA = ({ name }) => {
  return (
    <div>
      Sending to Component B
      <ComponentB name={name} />
    </div>
  );
};
export default ComponentA;
