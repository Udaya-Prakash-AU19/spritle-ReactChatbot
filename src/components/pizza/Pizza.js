import React, { Component } from "react";
import "../../styles/pizza.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Onions from "../onions/Onions";
import Mushroom from "../mushroom/Mushroom";
import Corn from "../corn/Corn";
import Veggie from "../veggie/Veggie";
import ButtonGroup from "../buttonGroup/ButtonGroup";

import CustomChatbot from "../chatbot/CustomChatbot";

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onions: false,
      mushroom: false,
      veggie: false,
      corn: false
    };
  }

  clickEventHandler = ingredient => {
    if (ingredient === "onions") {
      this.setState({
        onions: !this.state.onions
      });
    } else if (ingredient === "mushroom") {
      this.setState({
        mushroom: !this.state.mushroom
      });
    } else if (ingredient === "corn") {
      this.setState({
        corn: !this.state.corn
      });
    } else {
      this.setState({
        veggie: !this.state.veggie
      });
    }
  };

  render() {
    const onions = this.state.onions && <Onions />;
    const mushroom = this.state.mushroom && <Mushroom />;
    const corn = this.state.corn && <Corn />;
    const veggie = this.state.veggie && <Veggie />;

    return (
      <div>
        <div style={{textAlign:"center"}}>
          <h2 style={{color:"red"}}>Welcome to the React Chat bot.</h2>
          <h2>I am Node.js developer. This is the first time I try to create a Chatbot.
          It took almost a day to understand how to implement a Chatbot and code. This is possible as I have good understanding of React.js
          despite Node.js developer</h2>
          <h4 style={{color:"blue"}}>(For css, I have used source-code code)</h4>
          <h4>So I was able to do only one question given by you. Thanks for giving opportunity to learn a new thing.</h4>
        </div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="plate">
              <Base />
              {onions}
              {mushroom}
              {corn}
              {veggie}
            </div>
          </div>
          <ButtonGroup eventHandler={this.clickEventHandler} />
          <CustomChatbot eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}

export default Pizza;