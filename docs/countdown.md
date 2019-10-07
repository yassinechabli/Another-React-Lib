### Usage 

```
import React from 'react';
import {CountDown} from "another-react-lib" 

class App extends React.Component {
    
    render() {
     return (
         <CountDown sec="60" />     
       );       
    }
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`sec`|integer|no|null| The number of second to count down

### ToDo (V2)
- Implement `defaultProps` and `propTypes`
- Support minutes, hours, days, datetime...
