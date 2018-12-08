import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
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

