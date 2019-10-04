## Usage

```
import React from 'react';
import {StickyButton} from "another-react-lib"

function App() {
  return (
    <div className="App">
       <StickyButton text={'Go Top'} buttonColor='blue' size='small' styles={{color:'white'}} behavior='smooth' />
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`buttonColor`|string|no|red| Choose from red, green, blue, black, and gray.
`text`|string|no|text goes here| Text you want the button to display.
`size`|string|no|small| small, medium, and large font sizes.
`styles`|object|no|{}|Any additional styles you want to pass in.
`behavior`|string|no|auto| Defiens the scroll behaviour and choose from auto and smooth.
`handleClick`|function|no| () => {}| Function to call when button is clicked.