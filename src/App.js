import { Route, Switch } from "react-router-dom";
import members from "./components/members";
import Company from "./Pages/Company/Company";

import Home from "./Pages/Home/Home";
import Usuarios from "./Pages/Usuarios/Usuarios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/Usuarios/:id">
            <Usuarios members={members} />
          </Route>
          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>
          <Route exact path="/">
            <ul>
              <Home members={members} />
            </ul>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
