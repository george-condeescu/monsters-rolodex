import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


// import { render } from '@testing-library/react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a href="http://camiteleorman.ro">Learn react</a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''     
    }
    // this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  // handleChange(e){
  //   this.setState({searchField:e.target.value});
  // }
  handleChange=(e)=>this.setState({searchField:e.target.value})

  render(){
    const {monsters, searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder="Search box"/> 
        <CardList monsters={filteredMonsters}/>        
      </div>
    );
  }
}

export default App;
