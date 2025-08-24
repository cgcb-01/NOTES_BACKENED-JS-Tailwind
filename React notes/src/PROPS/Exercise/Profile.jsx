const app = () => {
  return (
    <Profile
      name="cgcb"
      age={19}
      Education="Pursuing B.Tech in Computer Science"
      Email="cgcb@gmail.com"
    />
  );
};
//const Profile = ({name, age, Education, Email}) => {
const Profile = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h3>Age : {props.age}</h3>
      <h3>Education : {props.Education}</h3>
      <h3>Email : {props.Email}</h3>
    </div>
  );
};
export default app;
