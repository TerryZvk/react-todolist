import React from 'react';
import { Input, Button, List } from 'antd';
import store from '../store';

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e){
    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value: e.target.value
    };

    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleButtonClick(){
    const action = {
      type: 'ADD_TODO_ITEM'
    };
    store.dispatch(action);
  }

  render(){
    return(
      <div style={{marginLeft:'20px'}}>
        <h1>TodoList</h1>
        <Input 
          value={this.state.inputValue} 
          placeholder='input info' 
          style={{width:'300px', marginRight:'34px'}}
          onChange={this.handleInputChange}
        />
        <Button type='primary' onClick={this.handleButtonClick}>提交</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
          style={{width:'400px',marginTop:'20px'}}
        />
      </div>
      
    )
  }
}