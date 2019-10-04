## Usage

```
import React from "react";
import { EmailButton } from "another-react-lib";

function App() {
    const mailto = "abc@xyz.com";
    const subject = "Hey!";
    const body = "How are you doing?";
    const size = "sm";
    return (
        <div className="App">
            <EmailButton mailto={mailto} subject={subject} body={body} size={size} />
        </div>
    );
}

export default App;
```

### Properties

Property | Type | Required | Description
:--- | :--- | :--- | :--- 
`mailto`|string|yes|The email address of the recipient.
`subject`|string|yes|The placeholder subject of the email.
`body`|string|yes|The placeholder body of the email.
`size`|string|yes|Size of the button to be rendered. Can have the value 'sm' (small), 'md' (medium), 'lg' (large)