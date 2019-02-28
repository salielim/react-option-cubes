import React, { Component } from 'react';
import OptionCube from './components/OptionCube'
import './App.css';

const optionsData = [
  {
    id: 838203882,
    label: 'Option 1',
    img: 'https://via.placeholder.com/300'
  },
  {
    id: 992490390,
    label: 'Option 2',
    img: 'https://via.placeholder.com/300'
  },
  {
    id: 992490390,
    label: 'Option 3',
    img: 'https://via.placeholder.com/300'
  }
]

// const optionsData = [
//   {
//     id: 838203882,
//     label: 'Option 1',
//   },
//   {
//     id: 992490390,
//     label: 'Option 2',
//   },
//   {
//     id: 992490390,
//     label: 'Option 3',
//   }
// ]

class App extends Component {
  render() {
    return (
      <div>
        <OptionCube
          data={optionsData}
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default App;
