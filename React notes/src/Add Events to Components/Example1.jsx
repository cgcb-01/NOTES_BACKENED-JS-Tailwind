const Copy = () => {
  const copyHandler = () => alert("Dont Copy the content");
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto
      ipsam. Laborum molestias quibusdam voluptatum, dicta magni vel voluptates
      nobis.
    </p>
  );
};

const Button = () => {
  return (
    <button onClick={() => console.log("You clicked me")}>Click Me</button>
  );
};

const App = () => {
  return (
    <section>
      <Button />
      <h2>Example 2</h2>
      <Copy />
    </section>
  );
};
export default App;
