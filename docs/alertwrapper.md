### Usage 

```
import React from 'react';
import {AlertWrapper} from "another-react-lib" 

class App extends React.Component {

    constructor() {
        this.state = {
            alertMsg: "",
            typeAlert: ""
        }
    }
    
    render() {
     return (
         <AlertWrapper {...this.state}>
           <div>...</div>
         </AlertWrapper>
       );       
    }
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`alertMsg`|string|no|null| This is the message you want to show
`typeAlert`|string|no|error| This changes the style of your alert

### Note for you
If you want to improve by adding new styles, please feel free to do it ! :smile: