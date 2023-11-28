import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListNotes from './components/ListNotes';
function App() {
  return (
    <div className="App">
      <header><h1>Aplicacion de notas</h1></header>
    <ListNotes />
    </div>
  );
}

export default App;
