import React from 'react';
import TodoListContainer from './TodoListContainer';
import { Menu } from 'antd';
import AppleCart from '../components/AppleCart';
import { Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Todolist</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/applecart">applecart</Link>
          </Menu.Item>
        </Menu>

        <Route exact path="/" component={TodoListContainer} />
        <Route path="/applecart" component={AppleCart} />
      </div>  
    )
  }
}