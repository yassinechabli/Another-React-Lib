## Usage 

```
import React from 'react';
import {Button} from "another-react-lib" 

function App() {

  state = {
    title: "",
    options: [],
  }

  return (
    <div className="Checkbox">
      <Checkbox
        title={this.props.title}
        options={this.props.options}
        onItemClick = {this.props.onItemClick} 
      />
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`title`|string|yes|empty string| Title for the checkbox
`options`|array|yes|empty array| Options array that contains an object in the form of {id: 1, label: 'something'} 
`onItemClick`|function|no|(id) => {}| Function to call when checkbox is clicked
