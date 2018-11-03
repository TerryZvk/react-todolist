import React from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends React.Component{
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state ={
      username: '',
      content: ''
    }
  }

  componentWillMount(){
    this._loadUsername()
  }

  componentDidMount(){
    this.textarea.focus();
  }

 

  _saveUsername(username){
    localStorage.setItem('username', username)
  }

  _loadUsername(){
    const username = localStorage.getItem('username');
    if(username){
      this.setState({username})
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
      this.props.onSubmit({
        username: this.state.username, 
        content: this.state.content, 
        createdTime: +new Date()});
    }
    this.setState({
      content: ''
    })
  }

  handleUsernameBlur(event){
    this._saveUsername(event.target.value);
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsername.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={(textarea)=>{this.textarea = textarea}} value={this.state.content} onChange={this.handleContent.bind(this)}/>
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