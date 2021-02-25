import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price:'$99.99'},
    {name: 'Illustator', price:'$70.99'},
    {name: 'PDF Reader', price:'$9.99'},
    {name: 'Stock Images', price:'$5.99'}

  ]
  return (
    <div className="App">
      <header className="App-header">
      
      <p>Learning React...</p>
      
      <Person name="Nabil Hossain" status="Coder"></Person>
      <Person name="Ashab Hussan" status="Muslim"></Person>
      <Person name="Sabir Hasan" status="Lawer"></Person>

      {/* {
        products.map(product => <Product></Product>)
      } */}

      <Product name={products[0].name} price={products[0].price} ></Product>
      <Product name={products[1].name} price={products[1].price} ></Product>
      <Product name={products[2].name} price={products[2].price} ></Product>
      <Product name={products[3].name} price={products[3].price} ></Product>



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

function Product(props) {
  const productStyle = {
    border : '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '250px',
    width: '250px',
    float: 'left',
    margin: '10px'
  }

  return (
    <div style={productStyle}>
      <h2>{props.name} </h2>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
