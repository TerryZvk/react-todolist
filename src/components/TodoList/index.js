import React from 'react';
import { Input, Button, List } from 'antd';

export default class TodoList extends React.Component {

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
            <List.Item onClick={this.props.handleItemDelete}>{item}</List.Item>
          )}
          style={{width:'400px',marginTop:'20px'}}
        />
      </div>
      
    )
  }
}

