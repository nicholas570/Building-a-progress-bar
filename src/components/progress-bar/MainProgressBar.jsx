import React from "react";
import ProgressBar from "./ProgressBar";

class MainProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 50
    };
  }


  render() {
    return (
      <div>
        <ProgressBar percentage={this.state.percentage} />
      </div>
    );
  }
}

export default MainProgressBar;