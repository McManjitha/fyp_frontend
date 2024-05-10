import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import LogIn from "./components/login/Login";
import Explore from "./components/explore/Explore";
import Property from "./components/property/Property";
import RegisterLand from "./components/registerLand/RegisterLand";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/signin" Component={SignIn}></Route>
      <Route path="/login" Component={LogIn}></Route>
      <Route path="/explore" Component={Explore}></Route>
      <Route path="/property" Component={Property}> </Route>
      <Route path="/logout" Component={Home}></Route>
      <Route path="/registerland" Component={RegisterLand}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
