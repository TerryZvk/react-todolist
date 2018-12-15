import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from '../components/TodoList/store/actionCreators';

const mapStateToProps = (state) => {
  return {
    inputValue: state.getIn(['todolist', 'inputValue']),
    list: state.getIn(['todolist', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (e) => {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleButtonClick: () => {
      const action = getAddItemAction();
      dispatch(action);
    },
    handleItemDelete: (e) => {
      const value = e.target.innerText;
      const action = getDeleteItemAction(value)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

