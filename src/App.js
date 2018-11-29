import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  // Create object with info for beers (Name, ABV, img, brewer, type, country)
  // constructor() {
  //   super();
  //   this.state = {
  //     name: name,
  //     abv: abv,
  //     img: img,
  //     brewer,
  //     type,
  //     country
  //   }
  // }
  componentDidMount() {
    const getBeer = () => {
      axios
        .get("http://proxy.hackeryou.com", {
          params: {
            dataType: "json",
            method: "GET",
            reqUrl: "http://ontariobeerapi.ca/beers",
            xmlToJSON: false,
            useCache: false
          }
        })
        .then(res => {
          const beerObjects = res.data
          
          console.log(beerObjects);

        });
    }
    getBeer();
  }
  render() {
    return <div className="App">
        <header>
          <h1>Beer App</h1>
          <form action="">
            <select name="" id="">
              <option value="name">Name</option>
              <option value="type">Type</option>
              <option value="abv">ABV</option>
              <option value="country">Country</option>
            </select>
            <input type="text"/>
          </form>
        </header>
      </div>;
  }
}

export default App;
