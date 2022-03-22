import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import HelloWorld from "./components/hello-world"
import Labs from "./components/Labs/index";
import Tuiter from "./components/Tuiter/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/hello"
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="/"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="/tuiter"
                   exact={true}
                   element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;