import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import { clickCheackedBox } from './store/actionCreators';

const treeView = (data, handleOnChange) => {
  return <ul>
  {
    data.map(item => 
      <div key={item.get('value')}>
        <li>
          <Checkbox onChange={handleOnChange} value={item.get('value')} />
          {item.get('value')}
          {item.get('children') ? treeView(item.get('children'), handleOnChange) : null}
        </li>
      </div>
    )
  }
  </ul>
}

class TagsTree extends Component {
  render() {
    const { tagsTreeData, handleOnChange } = this.props; 
    return (
      <div>
        {
         treeView(tagsTreeData, handleOnChange)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tagsTreeData: state.get('tagsTreeData')
})

const mapDispatchToProps = (dispatch) => ({
  handleOnChange(e){
    console.log(`checked = ${e.target.checked}`);
    console.log(e.target.value);
    const action = clickCheackedBox(e.target.value, e.target.checked);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TagsTree);