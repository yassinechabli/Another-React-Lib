import React, { Component } from 'react';
import { render } from 'react-dom';

// * Table
import Table from '../../src/Table/Table';
import '../../src/Table/Table.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <Table
          headerColor={'#333333'}
          border={true}
          borderColor={'#333333'}
          borderWidth={5}
          fontSize={68}
          headerFontColor={'#c095ca'}
          rowFontColor={'#89cf71'}
          stripped={true}
          hoverEffect={true}
          // rowBackgroundColor={'#4e8453'}
          data={[
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
          ]}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
