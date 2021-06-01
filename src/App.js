import './App.css';
import Home from "./component/pages/Home/Home";
import Club from "./component/pages/Club/Club"
import {BrowserRouter, Route} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/clubs/:urlTitle">
                    <Club/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
