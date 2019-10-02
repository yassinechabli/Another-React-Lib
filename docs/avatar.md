## Usage 

```
import React from 'react';
import {Avatar} from "another-react-lib" 

function App() {
  return (
    <div className="App">
       <Avatar src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png" alt="alternate text goes here" />
    </div>
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`src`|string|no|user.svg| URL for the Avatar image. 
`alt`|string|no|user avatar| Alternate text for image.

