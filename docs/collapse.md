## Usage 

```
import React from 'react';
import {Collapse} from "another-react-lib" 

function App() {
  return (
    <div className="App">
       <Collapse collapseHeader={'Collapse Header'} collapseBody={'Collapse Body'}/>
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`headerStyle`|object|no| {  cursor: 'pointer',  padding: 15, backgroundColor: '#0089CC',color: '#FFF',fontFamily: 'verdana'} | Styling for the header.
`bodyStyle`|object|no|{  padding: 15, fontFamily: 'verdana', fontSize: 14, cursor: 'pointer' }| Styling for the body.
`collapseHeader`|string|yes|none| The text to be displayed in the header.
`collapseBody`|string|yes|none| The text to be displayed in the body.
`styles`|object|no|{}|Any additional styles you want to pass in
`handleClick`|function|no| () => {}| Function to call when header is clicked.
