import React, { Component } from 'react';

class SocialLinks extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
       <div>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook-square fa-3x"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter-square fa-3x"></i>
        </a>
        <a href="https://github.com" target="_blank">
          <i class="fab fa-github-square fa-3x"></i>
        </a>
      </div>

      </div>
    )
  }
}

export default SocialLinks;