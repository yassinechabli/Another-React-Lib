## Usage

```
import React from 'react';
import {Searchbar} from "another-react-lib"

class App extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    window.alert("You submit the value : " + this.state.value);
  };

  render() {
    return (
      <div>
        <Searchbar
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

      </div>
    );
  }
}

export default App;
```

### Properties

| Property   | Type     | Required | Default value | Description                                       |
| :--------- | :------- | :------- | :------------ | :------------------------------------------------ |
| `value`    | string   | yes      | "             | Text you typed in                                 |
| `onChange` | function | yes      | () => {}      | Function to call when the input value is changed. |
| `onSubmit` | function | yes      | () => {}      | Function to call when submit button is clicked.   |
