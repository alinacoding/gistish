import App from "./App";
import Store from "./Store";
const AppWrapper = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

export default AppWrapper;
