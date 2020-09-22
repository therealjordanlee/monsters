import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <div>
          {/* <SearchBox placeholder="search monsters" handleChange={e => this.setState({searchField: e.target.value})}/> */}
          <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>

        </div>
        <div className="App">
          <CardList monsters={ filteredMonsters } />
        </div>
      </div>
    );
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({monsters: users}));
  }
}

export default App;
