## Usage

```
import React from 'react';
import {Header} from "another-react-lib"

function App() {
  return (
    <div className="App">
       <Header brandName="My Blog" />
    </div>
  );
}

export default App;
```

### Properties

| Property    | Type   | Required | Default value | Description                         |
| :---------- | :----- | :------- | :------------ | :---------------------------------- |
| `brandName` | string | no       | My App        | Brand name to display in header     |
| `theme`     | string | no       | dark          | theme of the header (dark or light) |
