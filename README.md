# Simple Selection Cubes
In forms, there are several ways for a user to select options - dropdowns, checkboxes and radio boxes. Here is an alternative - selection options presented in cubes that can be selected. This is a simple react component that uses Redux to store data of selected options.

## Start this app
Clone this repo and in the project directory run:
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the components in the browser.
The page will reload if you make edits.

## How to use the component
### Setup Reducers and Action creators
```
./src/components/OptionCubes/ducks.js
```

### Define the data, here it is mocked
```
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
```

### Import the component
```
import OptionCubes from './components/OptionCubes'
```

### Use the component
```
<OptionCubes
  data={optionsData}      // array containing options information 
  width="200px"           // customise the width of the cube or rectangle
  height="200px"          // customise the height of the cube or rectangle
  field="selectOneCube"   // field name of the option, this is the key stored in redux
  selectOne={true}        // use true if only one option can be selected or false for multiple options
/>
```