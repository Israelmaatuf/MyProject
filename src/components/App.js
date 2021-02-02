import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Top from "./Top.js";
// import Footer from "./Footer.js";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Top />
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
