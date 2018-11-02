import React from 'react';
import Component from './Comment'

export default class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }
  
  render(){
    return(
      <div>
        {
          this.props.comments.map((comment, i) => {
            return(
              <Component key={i} comment={comment}/>
            )
          })
        }
      </div>
    )
  }
}