## Usage 

```
import React from 'react';
import { TwitterShare } from "another-react-lib" 

function App() {
  const text="Sample Text";
  return (
    <div className="App">
       <TwitterShare message={text} size="md"/>
    </div>
  );
}

export default App;
```

###  Properties 

Property | Type | Required | Description
:--- | :--- | :--- | :--- 
`message`|string|yes|The text to be shared on Twitter. 
`size`|string|yes|Size of the button to be rendered. Can have the value 'sm' (small), 'md' (medium), 'lg' (large)

