import './App.css';
import Logo from './components/Logo';
import Utad from './images/logo.webpg';
function App() {
  return (
    <div className="App">
      <Logo
      url={Utad}
      alternative={"Logo U-Tad"}
      />
    </div>
  );
}

export default App;
