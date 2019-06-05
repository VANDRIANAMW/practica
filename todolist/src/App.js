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
    this.delete = this.delete.bind(this);
    this.deleteAll=this.deleteAll.bind(this);
    }

   render(){
   return (
       <div className="todoApp">
        <h1>Lista de tareas</h1>
        <form onSubmit={this.Add}>
         <input ref="fieldName" placeholder="Agrega una nueva Tarea!" onChange={e => this.setState({value: e.target.value})}/>
         </form>
         <br/>
           <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}
            <button className="deleteTask" onClick= {() => this.delete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
            <button className="deleteAll" onClick={this.deleteAll}> Eliminar
            </button>
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

 delete = i => {

    this.setState(state => {

      state.list.filter((item, j) => i !== j);
      const list = state.list.filter((item, index) => i !== index);
      return {
        list,
      };
    });
  };
  deleteAll = () => {
    this.setState({ list: [] });
  };
  }
  function App() {
  return (
    <div className="App">
     <Vanessa/>
    </div>
  );
}

export default App;
