import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

class Posts extends Component {

    render() {
        var postArray = Array.of();
      
      if (this.props.posts.length > 0)
          postArray = this.props.posts;
      else
          postArray.push(this.props.posts);

        var users = postArray.map(
            (value, index) => 
                (<User user={value} key={index} />)
        );

    return(
            <table border="1">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
    );
  }
}

Posts.propTypes = {
  posts:          PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Posts;