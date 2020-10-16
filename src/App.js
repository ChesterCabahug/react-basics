import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
      title: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value });
  }

  render() {
    const { cats, searchField, title } = this.state;
    // const filteredcats = cats.filter((cat) =>
    //   cat.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
      <div className="App">
      <h1>{title}</h1>
        <SearchBox
          placeholder="search nekko"
          handleChange={this.handleChange}
        />
        <CardList cats={cats} />
      </div>
    );
  }
}

export default App;
