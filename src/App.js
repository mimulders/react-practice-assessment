import logo from "./logo.svg";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Title content="Welcome to the Harry Potter website" />
      <NavBar className="AppNav" />

      <Routes>
        {/* <Route path="/" element={<App />} /> */}{" "}
        {/* How to let the root path refer to a component without creating a new page? */}
        <Route path="/character-list" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//   );
// }

// export default App;
