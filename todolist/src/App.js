import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';


class Vanessa extends React.Component {
   state = {
       value: "",
       array:[]
   }
   render(){
   return (
       <div>
        <h1>Controlador de entrada</h1>
         <input onChange={e => this.setState({value: e.target.value})}/>
         <br/>
         <ul>
         array.push({this.state.value});

          </ul>

        </div>

   );
   }
}
function App() {
  return (
    <div className="App">
     <Vanessa/>
    </div>
  );
}

export default App;
