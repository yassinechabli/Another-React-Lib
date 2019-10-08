## Usage

```
import React from 'react';
import {Card} from "another-react-lib"

class App extends Component {

  handleOnClick = e => {
   // do something when the card is clicked
  };

  render() {
    return (
      <div>
        <Card
            Header="octo"
            HeaderFontColor="skyblue"
            HeaderFontFamily="roboto"
            HeaderFontSize="14"
            subHeader="there is a better way"
            subHeaderFontColor="black"
            subHeaderFontSize="12"
            subHeaderFontFamily="roboto"
            date="14/05/2019"
            showDate="true"
            dateFontColor="blue"
            dateFontSize="10"
            dateFontFamily="robot"
            borderColor='gray'
            borderWidth="2px"
            borderRadius="3px"
            backgroundImage="image_path"
            onclick={this.handleOnClick}
                />

      </div>
    );
  }
}

export default App;
```

### Properties

| Property   | Type     | Required     | Default value  | Description                             |
| :--------- | :------- | :-------     | :--------------| :---------------------------------------|
| `Header`    | string   | no          | "              | card header text                        |
| `HeaderFontColor` | string | no      | "              | card header text color                  |
| `HeaderFontFamily` | string | non    | "              | card header  text font family           |
| `HeaderFontSize` | string | no       | "              | card header text size                   |
| `subHeader` | string | no            | "              | card sub header text                    |
| `subHeaderFontColor` | string | no   | "              | card sub header text color              |
| `subHeaderFontFamily` | string | no  | "              | card sub header text font family        |
| `subHeaderFontSize` | string | no    | "              | card sub header text size               |
| `date` | string | no                 | "              | card date                               |
| `showDate` | boolean | no            | false          | show the date or not                    |
| `dateFontColor` | string | no        | "              | card date color                         |
| `dateFontSize` | string | no         | "              | card date text size                     |
| `dateFontFamily` | string | no       | "              | card date text font family              |
| `tags` | array | no                  | "              | card tags                               |
| `showTags` | boolean | no            | false          | show tags or not                        |
| `backgroundImage` | string | no      | ''             | card background image                   |
| `borderColor` | string | no          | ''             | card border color                       |
| `borderWidth` | string | no          | ''             | card border width                       |
| `borderRadius` | string | no         | ''             | card border radius                      |
| `onClick` | function | yes           | () => ()       | Function to call when card  is clicked. |

