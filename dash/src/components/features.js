import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'bugatti', label: 'Bugatti' },
    { value: 'ferrari', label: 'Ferrari' },
    { value: 'am', label: 'Aston Martin' },
    { value: 'koenigsegg', label: 'Koenigsegg' },
    { value: 'bmw', label: 'BMW' },
    { value: 'cadillac', label: 'Cadillac' },
  ];

class App extends Component {

    state = {
      selectedOption: null,
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
  
    render() {
      const { selectedOption } = this.state;
  
      return (
        <div className="App" >
          <h3>You Favorite Car</h3>
          <Select
          isMulti={true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
      );
    }
  
  }
  
  export default App;