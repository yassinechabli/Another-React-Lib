import React, { Component } from 'react'
import { render } from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'

import Button from '../../src/Button/Button';
import LoadingButton from '../../src/LoadingButton';
import GhostButton from '../../src/GhostButton/GhostButton';
import Form from "../../src/Form/Form";

import FlatButton from '../../src/FlatButton/FlatButton';
import { Radio, RadioGroup} from '../../src/RadioButton/radio'

import Collapse from '../../src/Collapse/Collapse';
import Dropdown from '../../src/Dropdown/Dropdown';

import Header from '../../src/Header/Header';
import Avatar from '../../src/Avatar/Avatar';
import SocialIcon from '../../src/SocialIcon/SocialIcon'

import ProgressBar from '../../src/ProgressBar/ProgressBar';
import Searchbar from '../../src/SearchBar/Searchbar';

import Tabs from '../../src/Tabs/Tabs';
import Tab from '../../src/Tabs/Tab';

const Tab1 = () => {
  return <div>Tab1</div>
}

const Tab2 = () => {
  return <div>Tab2</div>
}



class Demo extends Component {
  handleItemClick(item) {
    window.alert("You selected : " + item);
  }
  state = {
    value: ""
  };
  handleChange2 = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    window.alert("You submit the value : " + this.state.value);
  };
  render() {
    const items = ['One', 'Two', 'Three']
    const handleChange1 =  ()=> {
      console.log("abcd");
    };
    return(
      <div>
        <h2>Avatar Component</h2>
        <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
        <br />

        <h2>Button Component</h2>
        <Button text={'best button ever'} size='medium' styles={{color:'white'}} buttonColor='blue' handleClick = {() => alert('hello world')} />
        <br />

        <h2>Collapse Component</h2>
        <Collapse collapseHeader={'Click me'} collapseBody={'Sup, dude!'}/>
        <br />

        <h2>Dropdown Component</h2>
        <Dropdown menuItems={items} onItemClick={this.handleItemClick} />
        <br />

        <h2>Flat Buttons</h2>
        <FlatButton text={'best button ever'} size='small' buttonColor='red' handleClick = {() => alert('Flatted world')} />
        <br />
        <FlatButton text={'best button ever'} size='small' buttonColor='green' handleClick = {() => alert('Flatted world')} />
        <br />

        <h2>Ghost Button</h2>
        <GhostButton buttonColor='red' text={"Spooky Button"} size='small' handleClick = {() => alert('Boo!')} />
        <br />
        <GhostButton buttonColor='green' text={"Spooky Button"} size='small' handleClick = {() => alert('Boo!')} />
        <br />

        <h2>Header Component</h2>
        <Header brandName={"My Awesome Site"} />
        <br />
        
        <h2>Loading Button Component</h2>
        Loading = 
        <LoadingButton loading={true}/>
        <br />
        Not Loading =
        <LoadingButton/>
        <br />

        <h2>Progress Bar Component</h2>
        <ProgressBar progress={9}
          fillColor={'red'}
          containerClassName='container-style'
          containerStyle={{
            justifyContent: 'center',
            height: 50,
            borderRadius: 0,
            borderWidth: 1,
            borderColor: 'black'
          }} />
        <br />

        <h2>Radio Buttons</h2>
        <RadioGroup name="xx" selectedValue="Orange" onChange={handleChange1}>
          <Radio value="Orange" />
          <Radio value="Apple" />
        </RadioGroup>
        <br />

        <h2>Search Bar Component</h2>
        <Searchbar
          value={this.state.value}
          onChange={this.handleChange2}
          onSubmit={this.handleSubmit}
        />
        <br />

        <h2>Simple Red Button</h2>
        <SimpleRedButton text={"Shinny Red Button"}/>
        <br />

        <h2>Social Icon Component</h2>
        <SocialIcon name={"twitter"} />
        <SocialIcon name={"facebook"} />
        <br />
      
        <h2>Tab Component</h2>
        <Tabs defaultTab={0}>
          <Tab component={Tab1} title="Default Tab"/>
          <Tab component={Tab2} title="Tab 2"/>
        </Tabs>
      </div>
    );

  }
}

render(<Demo />, document.querySelector('#demo'))