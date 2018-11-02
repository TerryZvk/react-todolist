import React from 'react';

export default class CommentInput extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      username: '',
      content: ''
    }
  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handleContent(e){
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(){
    if(this.props.onSubmit){
      const {username, content} = this.state;
      this.props.onSubmit({username, content});
    }
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUsername.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContent.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}