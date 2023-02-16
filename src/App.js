// import logo from './logo.svg';
import './App.css';

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React , {useState} from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,                  /// react -router feri padhna parchha
//   Link,
// } from "react-router-dom";


function App() {       
  const [mode, setMode] = useState('light');     // when darkmode is enabled or not 

  const [alert, setAlert] = useState("Null");   //for alert

  const showAlert = (messsage, type) =>{
    setAlert({
      msg : messsage,
      type: type
    })
    setInterval(() =>{
      setAlert("Null");},1500) 
  
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#214984';
    showAlert("Dark mode has been enabled","Sucess");
    document.title = ("React - Dark mode");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","Sucess");
    document.title = ("React- Light mode");
  }
}

  return (
          <>
                 
         <Navbar title="Navbar" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container mt-3">
     
       <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
  {/* <About /> */}
           
        </div> 
     

  
      {/* <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container mt-3">
        <Routes>
        <Route exact path ="/About">
        <About/>
        </Route>

         <Route exact path ="/">
 <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
       </Route>
        </Routes>
 </div>
        
    </BrowserRouter>    */}

    </>

          
 
        
                            /* //  <.> </> jsx fragments */
                           
  );
}

export default App;
