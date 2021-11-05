import './App.css';
import Form from './components/Form'
import {useState} from 'react'
import Display from './components/Display'


function App() {
  const [newBox, setNewBox] = useState([])

  const newBoxRequest = (box)=> {
    setNewBox(arr => [...arr, box])
  }

  return (
    <div className="App">
      <Form onNewBox = {newBoxRequest}/>
      <Display boxArray={newBox}/>
    </div>
  );
}

export default App;
