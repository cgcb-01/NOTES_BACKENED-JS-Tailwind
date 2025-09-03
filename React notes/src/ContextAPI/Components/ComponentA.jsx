import ComponentB from "./ComponentB.jsx";
//By Prop Drilling
/*const ComponentA = ({ name }) => {
  return (
    <div>
      Sending to Component B
      <ComponentB name={name} />
    </div>
  );
};
// export default ComponentA;*/
const ComponentA = () => {
  return (
    <div>
      Sending to Component B
      <ComponentB />
    </div>
  );
};
export default ComponentA;
