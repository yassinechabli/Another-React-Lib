## Usage 

```
import React from 'react';
import {Button} from "another-react-lib" 

function App() {
  return (
    <div className="App">
       <Button text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue'
        handleClick = {() => alert('hello world')} />
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`buttonColor`|string|no|red| Choose from red, green, blue, black, and gray. 
`text`|string|no|text goes here| Text you want the button to display
`size`|string|no|small| small, medium, and large font sizes.
`styles`|object|no|{}|Any additional styles you want to pass in
`handleClick`|function|no| () => {}| Function to call when button is clicked.

