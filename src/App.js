import logo from './logo.svg';
import './App.css';
import AppBar from "./header/AppBar";
import BasicGrid from "./component/SearchSection";
import BasicTabs from "./component/SearchBar";

function App() {
  return (
      <div>
        <AppBar/>
        <BasicTabs/>
      </div>

//     <div className="App">
// r      <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
  );
}

export default App;
