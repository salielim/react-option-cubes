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

// const optionsDataNoImg = [
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
        <OptionCubes
          data={optionsData}
          width="200px"
          height="200px"
          field="selectOneFramework"
          selectOne={true}
        />
        <OptionCubes
          data={optionsData}
          width="200px"
          height="200px"
          field="selectManyFramework"
          selectOne={false}
        />
      </div>
    );
  }
}

export default App;
