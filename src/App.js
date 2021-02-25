import logo from './logo.svg';
import './App.css';

function App() {
  var name = " Tanim";
  return (
    <div className="App">
      <header className="App-header">
      
      <p>Learning React...</p>
      
      <Person name="Nabil Hossain" status="Coder"></Person>
      <Person name="Ashab Hussan" status="Muslim"></Person>
      <Person name="Sabir Hasan" status="Lawer"></Person>

      



      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid aqua',
    margin: '10px',
    padding: '7px' 
  }
  return (
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <h3>{props.status}</h3>
    </div>
  );
}

export default App;
