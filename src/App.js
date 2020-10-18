import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import "./styles.css";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
    //... is the ES6 Spread Operator which just expands the array for a function that is expecting more values
    //in this case, the ... is listing all existing IDs in the array
    //and the character vlaue is being added to the end of the array/list
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>React Walkthrough</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add new data</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
