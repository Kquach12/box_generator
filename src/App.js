import './App.css';
import Form from './components/Form'
import {useState} from 'react'
import Display from './components/Display'


function App() {
  const [newBox, setNewBox] = useState([])

  const newBoxRequest = (color)=> {
    setNewBox(arr => [...arr, color])
    console.log(newBox)
  }

  return (
    <div className="App">
      <Form onNewBox = {newBoxRequest}/>
      <Display box={newBox}/>
    </div>
  );
}

export default App;
