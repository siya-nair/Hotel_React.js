import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import hotels from './hotels.json';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hotels: hotels,
      searchfield: ''
    }
  }

    componentDidMount() {
    fetch('/hotels.json')
    .then(response=> {
      return response.json();
    })
    .then(users => {this.setState({ hotels: users})});
   }
   

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
   
    const { hotels, searchfield } = this.state;
    const filteredhotels = hotels.filter(hotel =>{
      return hotel.name.toLowerCase().includes(searchfield.toLowerCase());

    })
  
    return !hotels.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>React Hotel App</h1>
          <SearchBox searchChange={this.onSearchChange}/>
         
            <CardList hotels={filteredhotels} />
      
        </div>
      );
  }
}

export default App;