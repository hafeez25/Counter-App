
import './App.css';
import Display from './components/Display';

import "./components/Button.css"


let count = 0;
function App() {

  return (
    
    <div className="App">
      <Display count = {count}/>
    
    </div>
  );
}

export default App;
