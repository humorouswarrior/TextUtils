import { useState } from 'react';
import './App.css';                  //this project boilerplate code was made using create-react-app. It uses webpack
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
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
      {/* <Navbar title = "TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      
      <div className="container">
        <TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert} />
        </div>

      {/* <div className="container">
        <About/>
      </div> */}
    </>
  );
}

export default App;
