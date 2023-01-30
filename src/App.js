import { useState } from 'react';
import './App.css';                  //this project boilerplate code was made using create-react-app. It uses webpack
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";    //react-router dom is the actual thing using which a react app becomes a single page application. see where all its components are used and how they are used to link pages in app.js and navbar.js

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor = "rgb(3 7 54)"
    showAlert("Dark mode has been enabled", "success")
  }
  else{
    setMode("light");
    document.body.style.backgroundColor = "white"
    showAlert("Light mode has been enabled", "success")
  }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} aboutText="About TextUtils"/>
      <Alert alert = {alert}/>
      
      <div className="container">
      <Routes>
          <Route exact path="/" element = {<TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert} />}/>
          <Route exact path="home" element = {<TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert} />}/>
          <Route exact path="about" element = {<About mode = {mode}/>}/>
        </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
