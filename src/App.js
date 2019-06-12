import React, { useState } from 'react';
import './App.css';
import Person from './Component/person';

const App = () => {
  const [state, setState] = useState(
    {
      person: [
        {
          name: 'Eevee',
          age: 24
        },
        {
          name: 'Charmander',
          age: 19
        },
        {
          name: 'Pikachu',
          age: 23
        },
      ],
      others: 'example of state'
    });
  const newPersons = [
    {
      name: 'Rayquaza',
      age: 70
    },
    {
      name: 'Groudon',
      age: 50
    },
    {
      name: 'Kyogre',
      age: 50
    },
  ];
  const changeName = () => {
    setState({
      ...state,
      person: newPersons,
    });
  }
  const handleChange = (event) => {
    const changePerson = [
      {
        name: event.target.value,
        age: 13
      }
    ]
    setState({
      ...state,
      person: changePerson,
    });
  }
  return (
    <div className="App">
      <button onClick={changeName}>Change name</button>
      {state.person.map(item => <Person handleChange={handleChange} key={item.name} {...item} />)}
    </div>
  );
}

export default App;
