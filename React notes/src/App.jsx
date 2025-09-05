// 1st react app
import Header from "./1st react app/header";
import Maincontent from "./1st react app/maincontent";
import Footer from "./1st react app/footer";
//JSX ex-1
import JSXRules from "./JSX_exercise/Ex-1/JSXRules";
//jsx ex-2
import Welcome from "./JSX_exercise/JSX_Ex-2/Welcome";
//JSX expression ex-1
import Greeting from "./JSX expression/EX-1/Greeting";
//JSX expression ex-2
import ProductInfo from "./JSX expression/Ex-2/ProductInfo";
//List in JSX
import ListTheory from "./LIST in JSX/ListTheory";
import ProductList from "./LIST in JSX/Exercise/ProductList.jsx";
import UserList from "./LIST in JSX/Exercise/UserList.jsx";
//Props in JSX
import PropsTheory from "./PROPS/propsexample.jsx";
import Profile from "./PROPS/Exercise/Profile.jsx";
//Conditional Rendering
import ValidPassword from "./Conditional Rendering/cond_render_example1.jsx";
import Cart from "./Conditional Rendering/Cond_render_example2.jsx";
//conditional rendering exercise
import Weather from "./Conditional Rendering/Exercise/Weather.jsx";
import Greetings from "./Conditional Rendering/Exercise/Greeting.jsx";
import UserStatus from "./Conditional Rendering/Exercise/UserStatus.jsx";
//Styling in jsx
import StyleCard from "./Styling render in react/Exercise/StyleCard.jsx";
//Events to Components
import Events from "./Add Events to Components/Example1.jsx";
//States
import Counter from "./State And Hooks/Example_counter.jsx";
import Friends from "./State And Hooks/Example2.jsx";
//States Excercise
import StatesExcercise from "./State And Hooks/Exercise/ExcerciseStates.jsx";
//Portals
import Copied from "./Portal in Jsx/Copy.jsx";

//contextHook
import ContextHook from "./Context Hook/ContextHookExample.jsx";
//useReducer
import Counterreducer from "./useReducerHook/Exercise/Counter.jsx";
//useId
import UniqueId from "./useId/Example.jsx";

import React from "react";
const App = () => {
  return (
    /*1.----1st app
    <div>
      <Header />
      <Maincontent />
      <Footer />
    </div>*/
    /*2.---JSX ex-2
     <Welcome />*
    /*3.---JSX ex-1
    <JSXRules />*/
    /*4.---JSX expression ex-1
    <Greeting />*/
    /*5.---JSX expression ex-2
    <ProductInfo />*/
    /*6.---List in JSX
    <ListTheory />
    7.---List in JSX exercise
    <div>
      <ProductList />
      <UserList />
    </div>*/
    /*8.---Props in JSX exercise
    <PropsTheory />
    <Profile />*/

    /*9.---Conditional Rendering
    <div>
      <ValidPassword />
      <Cart />
      <Greetings timeOfDay={"afternoon"} />
      <Weather />
      <UserStatus />
    </div>*/
    /*10. -------- Styling
    <StyleCard />*/
    /*11. --------Events to Componnets
    <Events />*/
    /*12. --------States
     
    //<Counter />
    //<Friends />
    <StatesExcercise />*/
    /* Portals in JSX
    <Copied />*/

    /* Prop Drilling, ContextAPI, CONTEXTHOOK
    <ContextHook />*/

    //useReducer
    //<Counterreducer />

    /*useId
     */
    <UniqueId />
  );
};
export default App;
