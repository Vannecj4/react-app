
import './App.css';
import Weather from "./Weather";

export default function App() {
 
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity="Amsterdam"/>
     
     <footer>
       This project was coded by Vanessa Cerdas and is {""}
       <a rel="noreferrer" href= "https://github.com/Vannecj4/react-app" target= "_blank" 
       > 
       Open source on Github 
       </a>
       </footer> 
        </div>
    </div>
    
  );
}

  