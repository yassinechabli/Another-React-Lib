## Usage

```
import React from 'react';
import {ProgressBar} from "another-react-lib"

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
       <ProgressBar
          progress={9}
          fillColor={'red'}
          containerClassName='container-style'
          containerStyle={{
            justifyContent: 'center',
            height: 50,
            borderRadius: 0,
            borderWidth: 1,
            borderColor: 'black'
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
| `progress` | number   | yes      | 0             | Progress of the bar                                 |
| `containerStyle` | object  | no       | {}      | Style object of the container of the progress bar |
| `containerClassName` | string  | no       | ''      | Classname of the container of the progress bar |
| `fillColor` | string | no       | red      | Color that must fill the bar.   |
