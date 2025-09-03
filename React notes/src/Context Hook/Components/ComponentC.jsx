import { useContext } from "react";
import { Data, Data2 } from "../ContextHookExample";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data2);
  return (
    <div>
      <h1>
        I am {name} and I am {age} years Old
      </h1>
    </div>
  );
};
export default ComponentC;
