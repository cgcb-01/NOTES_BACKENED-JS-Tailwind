const ComponentC = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>

      <p>
        Received From the main Component to Component A then From A to B then
        From B to C
      </p>
    </div>
  );
};
export default ComponentC;
