import "assets/scss/style.scss";
import { getStorage } from "utils/helpers";
import Login from "pages/login";
import Chat from "pages/chat";

const { idInstance } = getStorage() || {};
const { isError } = getStorage("error") || {};

function App() {
  if (!idInstance || isError) {
    return <Login />;
  }

  return <Chat />;
}

export default App;
