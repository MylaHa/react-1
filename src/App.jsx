const items = ['Apples', 'Bananas', 'Cherries', 'Lime'];

function Header() {
  return <h1>My Grocery List</h1>;
}

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header />
      <List items={items} />
      <List items={items} />
    </div>
  );
}

export default App;