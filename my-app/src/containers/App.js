import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBar";
import "../containers/App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  state = {
    robots: [],
    searchfield: " ",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({
      searchfield: e.target.value,
    });
  };
  render() {
    const { robots, searchfield } = this.state;
    const Filterrobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h2>Loading....</h2>
    ) : (
      <div className="wrapper tc">
        <h1 className="title-robo f2`">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={Filterrobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
