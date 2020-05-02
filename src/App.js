import React, { Component } from 'react';
import CardArray from './Cardlist';
import {robots} from './robots';
import Searchbar from './Searchbar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:robots,
      searchfield:''
    }
  }

  onSearchChange = (event)=> {
    this.setState({searchfield: event.target.value})
}

  render() {
    const filteredRobots = this.state.robots.filter( robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  return(
    <div className='tc'>
      <h1 className="f1">FC Barcelona</h1>
      <Searchbar searchChange={this.onSearchChange}/>
      <CardArray robots={filteredRobots}/>
    </div>
  )
  }
}


export default App;
