## Usage

```
import React from 'react';
import {CircularProgressBar} from "another-react-lib"

class App extends Component {
  state = {
    progress: 0
  };

  fetchData = async () => {
    const progress = await fetchData(or download something ...)
    this.setState({progress})
  }  

  render() {
    return (
      <div>
       <CircularProgressBar
          width={300}
          strokeWidth={7}
          progress={25}
          fillColor={'purple'}
          containerClassName='container-style'
          containerStyle={{
            justifyContent: 'center',
            height: 350,
            border: '1px solid black'
          }}
        />
      </div>
    );
  }
}

export default App;
```

### Properties

| Property   | Type     | Required | Default value | Description                                       |
| :--------- | :------- | :------- | :------------ | :------------------------------------------------ |
| `width`    | number   | yes      | 200           | Width you the bar. Since the circular progress bar is inside a square its length and width are equal.  |
| `strokeWidth`| number | yes      | 5             | Stroke width of the circle                        |
| `progress` | number   | yes      | 89            | Progress of the bar                              |
| `containerStyle` | object  | no       | {}      | Style object of the container of the circular progress bar |
| `containerClassName` | string  | no       | ''      | Classname of the container of the circular progress bar |
| `fillColor` | string | yes       | #4caf50    | Color that must fill the circle.   |
