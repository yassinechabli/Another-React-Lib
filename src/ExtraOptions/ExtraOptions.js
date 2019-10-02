import React from 'react';
import './ExtraOptions.css';

class ExtraOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const options = this.props.options.map(option => (
      <li className='option'>{option}</li>
    ));

    return (
      <div
        className='section'
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.state.hover && <ul className='optionsList'>{options}</ul>}
      </div>
    );
  }
}

ExtraOptions.defaultProps = {
  options: ['Delete', 'Save']
};

export default ExtraOptions;
