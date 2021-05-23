import './App.css';
import Home from "./component/pages/Home/Home";
import Club from "./component/pages/Club/Club"
import {BrowserRouter, Route} from "react-router-dom";
import ClubBlock from "./component/pages/Home/ClubBlock";
import {clubsDataStyles, clubsName} from "./Data";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/clubs">
            <Club/>
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
