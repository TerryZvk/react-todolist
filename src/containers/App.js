import React from 'react';
import TodoListContainer from './TodoListContainer';
import ShoppingCartContainer from './ShoppingCartContainer';
import { Menu } from 'antd';

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
            <Link to="/shopping-cart">shopping-cart</Link>
          </Menu.Item>
        </Menu>

        <Route exact path="/" component={TodoListContainer} />
        <Route exact path="/shopping-cart" component={ShoppingCartContainer} />
      </div>  
    )
  }
}