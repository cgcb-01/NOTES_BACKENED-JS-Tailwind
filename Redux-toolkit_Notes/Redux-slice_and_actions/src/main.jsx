import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
// wrapped the entire app with Provider to make the Redux store available to all components
// This allows components to connect to the Redux store and access its state or dispatch actions.
