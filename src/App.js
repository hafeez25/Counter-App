
import './App.css';
import Display from './components/Display';

import "./components/Button.css"


let count = 0;
function App() {

  const handleData = (data)=>{
    console.log(data)
  }

  return (
    
    <div className="App">
      <Display  onGetData = {handleData} count = {count}/>
    
    </div>
  );
}

export default App;
