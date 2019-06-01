import React from 'react';
import './App.css';
//import { spawn } from 'child_process';
//import ReactDOM from 'react-dom';


class Vanessa extends React.Component {
    constructor(props){
        super(props)
        this.state = {
       value: "",
       list:[]
   };
    this.Add = this.Add.bind(this);
    }

   render(){
   return (
       <div>
        <h1>Controlador de entrada</h1>
        <form onSubmit={this.Add}>
         <input placeholder="Agrega una nueva Tarea!" onChange={e => this.setState({value: e.target.value})}/>
         </form>
         <br/>
           <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}
            <button onClick={this.delete}>Eliminar</button>

            </li>
          ))}
        </ul>

          </div>
   );
   }
    Add (e){
        e.preventDefault();
        let arrayList=this.state.list;
        arrayList.push(this.state.value);
        this.setState ({
        list:arrayList,
        })
        console.log(arrayList)
   }
   delete (){
       let rar= this.state.list;
        for (let i=0; i <this.state.rar; i++) {
      rar.split(i)
   }
   console.log(rar);

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
