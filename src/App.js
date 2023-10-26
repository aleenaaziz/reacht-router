import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseStateArray from './components/UseStateArray';
// import UseStateObj from './components/UseStateObj';
// import ShortCir from './components/ShortCir';
// import BasicForm from './components/forms/BasicForm';
// import UseEffects1 from './components/useEffets/UseEffects1';
// import UseEffect2 from './components/useEffets/UseEffects2';
// import UseEffectAPI from './components/useEffets/UseEffectAPI';
// import UseReducer from './components/UseReducer';
// import ComA from './components/useContext/ComA';
// import Test from './components/useEffets/github/Test';
import Home from "./components/myapp/Home";
import About from "./components/myapp/About";
import Index from "./components/myapp/Index";
import Error from "./components/myapp/Error";
// import Nav from "./components/myapp/Nav";

function App() {
  return (
    <div>
      {/* <UseEffectAPI /> */}
      {/* <UseReducer /> */}
      {/* <Test />  */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/about" element={<About />}/>
        <Route path="/index" element={<Index />}/>
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
