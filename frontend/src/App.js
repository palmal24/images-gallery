import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';


function App() {
  const [word, setWord] = useState('');

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div> 
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSubmitSearch}/>
    </div>
  );
}

export default App;
