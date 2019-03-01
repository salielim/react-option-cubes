import React, { Component } from 'react';
import OptionCubes from './components/OptionCubes'
import './App.css';

const optionsData = [
  {
    id: 838203882,
    label: 'React',
    img: 'https://via.placeholder.com/300'
  },
  {
    id: 992490390,
    label: 'Angular',
    img: 'https://via.placeholder.com/300'
  },
  {
    id: 756765765,
    label: 'Vue',
    img: 'https://via.placeholder.com/300'
  }
]

const optionsDataNoImg = [
  {
    id: 909099088,
    label: 'Option 1',
  },
  {
    id: 909009982,
    label: 'Option 2',
  },
  {
    id: 756765765,
    label: 'Option 3',
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <h2>Select One Option Cubes</h2>
        <OptionCubes
          data={optionsData}
          width="200px"
          height="200px"
          field="selectOneCube"
          selectOne={true}
        />
        <h2>Multiple Select Cubes</h2>
        <OptionCubes
          data={optionsData}
          width="200px"
          height="200px"
          field="selectMultipleCube"
          selectOne={false}
        />
        <h2>Multiple Select Rectangle without Image</h2>
        <OptionCubes
          data={optionsDataNoImg}
          width="300px"
          height="15px"
          field="selectMultipleRect"
          selectOne={false}
        />
      </div>
    );
  }
}

export default App;