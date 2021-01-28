import TweetInput from './components/TweetInput';
import './App.css';
import TweetList from './components/TweetList';

function App() {
  return (
    <div style={{ "display": "flex" }} className="App">
      <section style={{ "width": "50%" }}>
        <TweetInput />
      </section>
      <section style={{ "width": "50%" }}>
        <TweetList />  
      </section>
    </div>
  );
}

export default App;
