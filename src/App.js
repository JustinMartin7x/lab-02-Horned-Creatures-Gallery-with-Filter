import './styles/App.css';
import images from './data.js'
import CreatureList from './CreatureList.js'







function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>Welcome to Horned Beasts Gallery</div>
        </header>
      </div>
      <div className="container">
        <CreatureList images={images} />


      </div>
    </>
  );
}

export default App;
