import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person';
import { personArr } from './MockData/Person';
import ErrorBounderies from './ErrorBounderies/ErrorBounderies';

class App extends Component {
  state = {
    persons: personArr,
    others: 'example of state',
    togglePerson: true
  };
  // Tuan's idea
  // const handleChange = id => event => {
  //   setState({
  //     ...state,
  //     person: state.person.map(p => ({...p, name: p.id === id ? event.target.value : p.name}))
  //   });
  // }

  handleChange = (event, id) => {
    this.setState({
      ...this.state,
      persons: this.state.persons.map(p => ({
        ...p,
        name: p.id === id ? event.target.value : p.name
      }))
    });
  };

  togglePerson = () => {
    this.setState({
      ...this.state,
      togglePerson: !this.state.togglePerson
    });
  };

  render() {
    const personComponent = (
      <div>
        {this.state.persons.map((item, index) => (
          <ErrorBounderies key={index}>
            <Person handleChange={this.handleChange} {...item} />
          </ErrorBounderies>
        ))}
      </div>
    );
    return (
      <div className="App">
        <button onClick={this.togglePerson} className="Red">
          Toggle person
        </button>
        {this.state.togglePerson && personComponent}
        <br />
      </div>
    );
  }
}

export default App;
