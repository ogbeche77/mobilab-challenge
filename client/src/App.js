import React from 'react';
import "./assets/main.scss";
import { Provider } from "react-redux";
//import "jquery";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.js";
import "./modules/index";
import "./assets/main.scss";
import store from "./modules/store";
import Navbar from "./components/Navbar";
import Display from './components/Display';
/*import "jquery";
import "bootstrap";
import "popper.js";*/


function App() {
  return (
    <Provider store={store}>

      <Navbar />
      <Display />
    </Provider>
  );
}

export default App;
