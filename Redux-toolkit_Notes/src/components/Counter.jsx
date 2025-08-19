import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice.js";

const counter = () => {
  //Read the data from the redux store
  const count = useSelector((state) => state.counter.value);
  //Dispatch actions to the redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default counter;
