const App = () => {
  return <User name="Sutapa" age={19} />;
};
const User = (props) => {
  return (
    <div>
      <h1>
        My name is {props.name} and my age is {props.age}
      </h1>
    </div>
  );
};
export default App;
