import './App.css';
import logo from './reactjs-icon.png';

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="react logo" className="logo"></img>
        <p className="header--title">ReactFacts</p>
        <p className="header--right"> React Course - Project 1</p>
      </div>
      <main>
        <h1> Fun facts about React</h1>
        <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      
    </div>
    
  )
  
}

