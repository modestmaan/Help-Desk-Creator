import React, { Component } from "react";
// import "./Layout.css";

class HelpDesk extends Component {
  state = {
    name: "",
    prob: "",
    type: "Bug",
    expect: "",
    try1: "Nope",
    try2: "Nope",
    try3: "",
    sus: "",
    newErr: "",
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onTypeChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  onProbChange = (e) => {
    this.setState({
      prob: e.target.value,
    });
  };
  onExpectChange = (e) => {
    this.setState({
      expect: e.target.value,
    });
  };
  onTry1Change = (e) => {
    this.setState({
      try1: "Yep",
    });
  };
  onTry2Change = (e) => {
    this.setState({
      try2: "Yep",
    });
  };
  onTry3Change = (e) => {
    this.setState({
      try3: e.target.value,
    });
  };
  onSusChange = (e) => {
    this.setState({
      sus: e.target.value,
    });
  };
  onErrorChange = (e) => {
    this.setState({
      newErr: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              ":star:*New Help-Desk Request by* " + `${this.state.name}:star:`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              "*_Type of problem?_*\n" +
              "-" +
              this.state.type +
              "\n*_What is the problem?_*\n" +
              "-" +
              this.state.prob,
          },
          // accessory: {
          //   type: "image",
          //   image_url:
          //     "https://w7.pngwing.com/pngs/224/200/png-transparent-debugging-logo-problem-solving-computer-programming-others-text-trademark-computer-program.png",
          //   alt_text: "alt text for image",
          // },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*_What I expected to happen_*\n" + "-" + this.state.expect,
          },
          // accessory: {
          //   type: "image",
          //   image_url:
          //     "https://w1.pngwing.com/pngs/675/643/png-transparent-question-mark-person-man-symbol-joint.png",
          //   alt_text: "alt text for image",
          // },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              "*_What have I tried?_*\n" +
              "StackOverFlow Approach: " +
              this.state.try1 +
              "\nConsole Logging: " +
              this.state.try2 +
              "\nOther: " +
              this.state.try3,
          },
          // accessory: {
          //   type: "image",
          //   image_url:
          //     "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
          //   alt_text: "alt text for image",
          // },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              "*_Why I suspect it's not working?_*\n" + "-" + this.state.sus,
          },
          // accessory: {
          //   type: "image",
          //   image_url:
          //     "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
          //   alt_text: "alt text for image",
          // },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*_ERROR Screenshot_*\n" + "-" + `${this.state.newErr}`,
          },
          // accessory: {
          //   type: "image",
          //   image_url:
          //     "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
          //   alt_text: "alt text for image",
          // },
        },
      ],
    };

    console.log(data);
    fetch(
      "https://hooks.slack.com/services/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",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      }
    );
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          {/* <p>Name</p> */}
          <div className="name">
            <p>Name</p>
            <input
              className="inputBox"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onNameChange}
              required
            />
          </div>
          <div className="dropdown bug">
            {/* <p>Type</p> */}
            <select
              className="dropdown-select"
              onChange={this.onTypeChange}
              value={this.state.value}
            >
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
            </select>
          </div>
          <div className="prob">
            <p>What is the problem?</p>
            <textarea
              className="inputBox"
              placeholder="honestly no clue man"
              value={this.state.prob}
              onChange={this.onProbChange}
              required
            />
          </div>
          <div className="expect">
            <p>What did I expect to happen?</p>
            <textarea
              className="inputBox"
              placeholder="expected it to work? duhhh"
              value={this.state.expect}
              onChange={this.onExpectChange}
              required
            />
          </div>
          <p className="tried">I have tried...</p>
          <div className="soa">
            <label className="soa1">StackOverFlow Approach</label>
            <input type="checkbox" onChange={this.onTry1Change}></input>
          </div>
          <div className="cl">
            <label className="cl1">Console Logging</label>
            <input type="checkbox" onChange={this.onTry2Change}></input>
          </div>
          <div className="other">
            <label>Other</label>
            <textarea
              className="inputBox"
              placeholder="tried looking at others code :)"
              value={this.state.try3}
              onChange={this.onTry3Change}
            />
          </div>

          <div className="sus">
            <p>Why I suspect it's not working?</p>
            <textarea
              className="inputBox"
              placeholder="i wouldnt be here if i knew"
              value={this.state.sus}
              onChange={this.onSusChange}
              required
            />
          </div>
          <div className="aLink">
            <a href="https://snipboard.io/" target="_blank">
              Click Here to get a URL of your error screenshot
            </a>
          </div>
          <div className="err">
            <p>Paste the URL below!</p>
            <textarea
              className="inputBox"
              placeholder="Error Code URL"
              value={this.state.newErr}
              onChange={this.onErrorChange}
            />
          </div>
          <button className="button-24" type="submit">
            Create Help Desk Request
          </button>
        </form>
      </div>
    );
  }
}

export default HelpDesk;
