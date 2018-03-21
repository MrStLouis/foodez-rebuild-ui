import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import PostForm from './PostForm';

const Profile = ({ auth, posts, loading }) => {
  if (loading) return null;
  return auth.status === 'AUTH_LOGGED_IN' ? (
    <div>
      <PostForm />
      <ul>
        {posts.map(({ id, name, views }) => (
          <div key={id}>{`${name} - views: ${views}`}</div>
        ))}
      </ul>
    </div>
  ) : (
    <div>You must be logged in to post</div>
  );
};

const getPosts = gql`
  query getPosts {
    posts {
      id
      name
      views
    }
  }
`;
// export default Profile;
export default graphql(getPosts, {
  skip: ({ auth }) => auth.status !== 'AUTH_LOGGED_IN',
  props: (({ data }) => ({ ...data })),
})(Profile);
