## Usage

```
import React from 'react';
import {Dropdown} from "another-react-lib"

class App extends Component {
  handleItemClick(item) {
    window.alert("You selected : " + item);
  }
  render() {
    const items = ["Link 1", "Link 2", "Link 3"];
    return (
      <div>
        <Dropdown menuItems={items} onItemClick={this.handleItemClick} />
      </div>
    );
  }
}

export default App;
```

### Properties

| Property      | Type     | Required | Default value | Description                                |
| :------------ | :------- | :------- | :------------ | :----------------------------------------- |
| `btnText`     | string   | no       | Menu          | Contains menu button's text                |
| `menuItems`   | array    | yes      | []            | Contains items to be displayed in the menu |
| `onItemClick` | function | no       | () => {}      | Function to call when an item is clicked.  |
