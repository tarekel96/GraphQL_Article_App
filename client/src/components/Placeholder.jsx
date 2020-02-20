import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ggl from "graphql-tag";
import { Query } from "react-apollo";

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`
});

const PLACEHOLDER_QUERY = ggl`
query PlaceholderQuery { 
placeholder {
        userId
        id
        title
        body
      }
}
`;

class Placeholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        // {
        //   userId: 1,
        //   id: 123,
        //   title: "post 1",
        //   body: "content 1"
        // },
        // {
        //   userId: 2,
        //   id: 456,
        //   title: "post 2",
        //   body: "content 2"
        // }
      ]
    };
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h4 className="text-center mt-2">Place Holder</h4>
          <h5 className="text-center mt-1">Data: </h5>
          <br />
          <Query query={PLACEHOLDER_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) return console.log(error);
              console.log(data);
              //       return <h1>TEST</h1>;

              return data.placeholder.map(post => (
                <div className="d-flex justify-content-center">
                  "POST userId": {post.userId}, "POST id": {post.id}, "POST
                  title": {post.title}, "POST body": {post.body}
                </div>
              ));
            }}
          </Query>
          {/* {this.state.posts.map(post => (
            <div className="d-flex justify-content-center">
              "POST userId": {post.userId}, "POST id": {post.id}, "POST title":{" "}
              {post.title}, "POST body": {post.body}
            </div>
          ))} */}
        </div>
      </ApolloProvider>
    );
  }
}

export default Placeholder;
// {({ loading, error, data }) => {
//         if (loading) return <h4>Loading...</h4>;
//         if (error) return console.log(error);
//         console.log(data);

//         return <h1>TEST</h1>;
//       }}
