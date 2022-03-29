import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import HelloWorld from "./components/hello-world"
import Labs from "./components/Labs/index";
import Index from "./components/Tuiter/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/explorescreen";
import Hello from "./components/Labs/redux-examples/reducers/hello";
import ProfileScreen from "./components/Tuiter/Profile";

function App() {
  return (


      <BrowserRouter>
          <div className="container">
          <Routes>
              <Route path = "/">
                  <Route index element = {<Labs/>}/>
                  <Route path = "labs" exact={true} element={<Labs/>}/>
                  <Route path = "hello" element = {<HelloWorld/>}/>
                  <Route path="tuiter" element = {<Index/>}>
                      <Route index element = {<HomeScreen/>}/>
                      <Route path = "explore" element = {<ExploreScreen/>}/>
                      <Route path = "profile" element = {<ProfileScreen/>}/>
                  </Route>
              </Route>
          </Routes>
          </div>
      </BrowserRouter>


      // <BrowserRouter>
      //     <div className="container">
      //         <Routes>
      //             <Route path="/">
      //                 <Route index
      //                        element={<Labs/>}/>
      //                 <Route path="hello"
      //                        element={<HelloWorld/>}/>
      //                 <Route path="tuiter"
      //                        element={<Index/>}>
      //                     <Route path = "home"
      //                            element = {<HomeScreen/>}/>
      //                     <Route path = "explore"
      //                            element = {<ExploreScreen/>}/>
      //                 </Route>
      //             </Route>
      //
      //
      //             {/*{/{/<Route path="notifications"/}/}*/}
      //             {/*/!*       element={<NotificationScreen/>}/>*!/*/}
      //                 </Routes>
      //                 </div>
      //                 </BrowserRouter>

      // <BrowserRouter>
      //     <div className="container">
      //         <Routes>
      //             <Route path="/">
      //                 <Route index
      //                    element={<Labs/>}/>
      //             <Route path="hello"
      //                    element={<HelloWorld/>}/>
      //             <Route path="tuiter"
      //                    element={<Index/>}>
      //                 <Route path = "home"
      //                    element = {<HomeScreen/>}/>
      //             <Route path = "explore"
      //                    element = {<ExploreScreen/>}/>
      //             </Route>
      //             </Route>
      //
      //             {/*<Route path="notifications"*/}
      //             {/*       element={<NotificationScreen/>}/>*/}
      //         </Routes>
      //     </div>
      // </BrowserRouter>


      // <BrowserRouter>
      //   <div className="container">
      //     <Routes>
      //       <Route path="/"
      //              exact={true}
      //              element={<Labs/>}/>
      //         <Route path="/hello"
      //                exact={true}
      //                element={<HelloWorld/>}/>
      //       <Route path="/tuiter"
      //              exact={true}
      //              element={<Tuiter/>}/>
      //         <Route path = "/tuiter/home"
      //         exact = {true}
      //         element = {<HomeScreen/>}/>
      //         <Route path = "/tuiter/explore"
      //         exact = {true}
      //         element = {<ExploreScreen/>}/>
      //         {/*<Route path="notifications"*/}
      //         {/*       element={<NotificationScreen/>}/>*/}
      //     </Routes>
      //   </div>
      // </BrowserRouter>

      // <BrowserRouter>
      //     <div className="container">
      //         <Routes>
      //             <Route path="/">
      //                 <Route index element={<Labs/>}/>
      //                 <Route path="/hello"
      //                        element={<HelloWorld/>}/>
      //                 <Route path="/tuiter"
      //                        element={<Tuiter/>}>
      //                     <Route index
      //                            element={<HomeScreen/>}/>
      //                     <Route path="/tuiter/explore"
      //                            element={<ExploreScreen/>}/>
      //                 </Route>
      //             </Route>
      //         </Routes>
      //     </div>
      // </BrowserRouter>
  );
}


export default App;