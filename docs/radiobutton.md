## Usage 

```
import React from 'react';
import { Radio, RadioGroup } from "another-react-lib" 

function App() {
  return (
    <div className="App">
       <RadioGroup name="MyRadioButton" selectedValue="Orange" onChange={handleChange}>
          <Radio value="Orange" /> 
          <Radio value="Apple" /> 
        </RadioGroup>
    </div>
  );
}

export default App;
```

###  Radio Group Properties 

Property | Type | Required | Description
:--- | :--- | :--- | :--- | :---
`name`|string|yes|What you'd normally put on the radio inputs themselves. 
`selectedValue`|string, number or boolean|yes|The currently selected value. This will be used to compare against the values on the Radio components to select the right one.
`onChange`|Function|yes| Will be used to handle the newly selected value.

###  Radio Group Properties 

Any prop you pass onto it will be transferred to the actual input under the hood. Radio components cannot be used outside a RadioGroup.