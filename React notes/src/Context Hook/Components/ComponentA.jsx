import ComponentB from "./ComponentB.jsx";
const ComponentA = () => {
  return (
    <div>
      Sending to Component B -- From A
      <ComponentB />
    </div>
  );
};
export default ComponentA;
