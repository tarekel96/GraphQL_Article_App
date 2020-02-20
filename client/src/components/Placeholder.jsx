import React, { Component } from "react";

class Placeholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          userId: 1,
          id: 123,
          title: "post 1",
          body: "content 1"
        },
        {
          userId: 2,
          id: 456,
          title: "post 2",
          body: "content 2"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h4 className="text-center mt-2">PLACEHOLDER</h4>
        {this.state.posts.map(post => (
          <div className="d-flex justify-content-center">
            "POST userId": {post.userId}, "POST id": {post.id}, "POST title":{" "}
            {post.title}, "POST body": {post.body}
          </div>
        ))}
      </div>
    );
  }
}

export default Placeholder;
