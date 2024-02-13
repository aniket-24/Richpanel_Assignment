import "./App.css";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import HelpDesk from "./components/HelpDesk/HelpDesk";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/helpdesk" component={HelpDesk} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
