import React from 'react';
import { Input, Button, List } from 'antd';

export default class TodoList extends React.Component {
  componentDidMount(){
    document.addEventListener("keydown",this.handleEnterKey);
  }

  componentWillUmount(){
      document.removeEventListener("keydown",this.handleEenterKey);
  }

  handleEnterKey = (e) => {
      if(e.keyCode === 13){
        this.props.handleButtonClick()
      }
  }

  render(){
    return(
      <div style={{marginLeft:'20px'}}>
        <h1>TodoList</h1>
        <Input 
          value={this.props.inputValue} 
          placeholder='input info' 
          style={{width:'300px', marginRight:'34px'}}
          onChange={this.props.handleInputChange}
        />
        <Button type='primary' onClick={this.props.handleButtonClick}>提交</Button>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item style={{lineHeight:'32px'}}
            >
              {item}
              <Button type='danger' style={{marginLeft: '40px'}} onClick={() => this.props.handleItemDelete(index)}>X</Button>
            </List.Item> 
          )}
          style={{width:'400px',marginTop:'20px'}}
        />
        
      </div>
      
    )
  }
}

