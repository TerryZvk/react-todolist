import React from 'react';
import { Input, Button, List } from 'antd';
import store from '../store';
import axios from 'axios';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from '../store/actionCreaters';

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
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleButtonClick(){
    if(this.state.inputValue === ''){return false;}
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }

  componentDidMount(){
    axios.get('./api/list.json').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      store.dispatch(action);
    }).catch(() => {
      alert('err')
    })
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
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>
          )}
          style={{width:'400px',marginTop:'20px'}}
        />
      </div>
      
    )
  }
}