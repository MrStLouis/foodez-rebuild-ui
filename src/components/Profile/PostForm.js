import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { TextField, RaisedButton } from 'material-ui';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
    };
  }
  handleSubmit = async () => {
    try {
      await this.props.makePost({
        variables: {
          name: this.state.postText,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  handeInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <TextField
          type="text"
          name="postText"
          value={this.state.postText}
          onChange={this.handeInputChange}
          hintText="what is your post"
        />
        <RaisedButton label="Submit" primary onClick={this.handleSubmit} />
      </div>
    );
  }
}

const makePost = gql`
  mutation ($name: String!) {
    makePost(name: $name) {
      id
      name
    }
  }
`;

export default graphql(makePost, {
  name: 'makePost',
  options: {
    refetchQueries: [
      'getPosts',
    ],
  },
})(PostForm);
