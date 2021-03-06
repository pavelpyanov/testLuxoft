import React from "react";
import { Provider } from "react-redux";
import StarWarsPage from "./pages/StarwarsPage";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StarWarsPage />
    </Provider>
  );
};

export default App;
