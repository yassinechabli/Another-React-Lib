import React, { Component } from "react";
import { render } from "react-dom";

import { Button, Profile } from "../../src/index";

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>
          Please feel free to use this file to experiment with components.
          However, do not push any changes to this file.
        </h2>

        <h4>Example of a component</h4>
        <Button buttonColor="blue" />
        <Profile
          className="Twitter"
          name="Test Name Here"
          bio="The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog."
          socials={[
            { name: "twitter", link: "twiter.com", size: "sm" },
            { name: "facebook", link: "facebook.com", size: "sm" }
          ]}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
